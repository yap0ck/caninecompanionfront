import {Component, Input, input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DogService} from "../../../../services/dog.service";
import {inThePast} from "../../../../validators/ValidatorsCustoms";
import {Subject, takeUntil} from "rxjs";
import {ConfirmationService, Message} from "primeng/api";
import {raceEnum} from "../../../../models/Breed";
import {Disease, VaccineShortDTO, VaccineUpdateForm} from "../../../../models/Vaccine";
import {DogFullDTO} from "../../../../models/Dog";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrl: './vaccine.component.css'
})
export class VaccineComponent implements OnInit, OnDestroy{
  form: FormGroup
  $destroyed= new Subject<boolean>()
  messages: Message[]=[]
  diseases: raceEnum[]=[]
  vaccines: VaccineShortDTO[]=[]
  updateEnabled: boolean = false
  updatedDate!: Date

  constructor(private readonly _dogService: DogService,
              private readonly _formBuilder: FormBuilder,
              private readonly _activatedRoute: ActivatedRoute,
              private readonly _confirmationService: ConfirmationService) {
    this.form= this._formBuilder.group({
      disease: this._formBuilder.control('', Validators.required),
      dateBooster: this._formBuilder.control(null, [Validators.required, inThePast()]),
      dogId: this._activatedRoute.snapshot.params['id']
    })
  }

  ngOnInit() {
    this.form= this._formBuilder.group({
    disease: this._formBuilder.control('', Validators.required),
    dateBooster: this._formBuilder.control(null, [Validators.required, inThePast()]),
    dogId: this._activatedRoute.snapshot.params['id']
  })
    Object.entries(Disease).map(e =>{
      this.diseases.push({
        key: e[0],
        value: e[1]
      })
    })
    this._dogService.getAllVaccine(this._activatedRoute.snapshot.params['id'])
      .pipe(takeUntil(this.$destroyed))
      .subscribe({
        next: (value)=> this.vaccines = value,
        error: (err) => this.messages.push({severity: "error", summary: err.error.summary, detail: err.error.message})
      })
  }

  onDateSelect(date:Date){
    let offset= date.getTimezoneOffset()
    date.setMinutes(date.getMinutes()-offset)
  }

  create(){
    this._dogService.createVaccine(this.form.value)
      .pipe(takeUntil(this.$destroyed))
      .subscribe({
      next:(value) => {
        this.ngOnInit()
      },
      error: (err) => this.messages.push({severity: "error", summary: err.error.summary, detail: err.error.message})
    });
  }

  update(id: number){
    let updateForm: VaccineUpdateForm= new class implements VaccineUpdateForm {
      date!: Date;
    };
    updateForm.date = this.updatedDate
    this._dogService.updateVaccine(id, updateForm)
      .pipe(takeUntil(this.$destroyed))
      .subscribe({
        next: (value) => {
          this.form.reset();
          this.updateEnabled=false
          this.ngOnInit();
        },
        error: (err) => this.messages.push({severity: "error", summary: err.error.summary, detail: err.error.message})
      });
  }

  confirm(event:Event, id: number){
    if (!event.target) {
      console.error('Event target is null');
      return;
    }
    this._confirmationService.confirm({
      target: event.target,
      message: "Voulez- vous supprimer ce Vaccin?",
      icon: "pi pi-eclamation-triangle",
      accept: () => {
        this.delete(id)
      },
      reject: () =>this.messages.push({severity: 'warn', detail: 'Suppression annulée'})
    })
  }

  delete(id:number){
    this._dogService.deleteVaccine(id)
      .pipe(takeUntil(this.$destroyed))
      .subscribe({
        next: () =>{
          this.messages.push({severity:'success', summary:'Success', detail:'Vaccin supprimé'})
          this.ngOnInit()
        }
      })
  }

  ngOnDestroy() {
    this.$destroyed.next(true);
    this.$destroyed.complete();
  }
}
