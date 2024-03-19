import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {DogService} from "../../../services/dog.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {BreedCreateComponent} from "../breed-create/breed-create.component";
import {BreedDTO} from "../../../models/Breed";
import {Message} from "primeng/api";

@Component({
  selector: 'app-morphology-create',
  templateUrl: './morphology-create.component.html',
  styleUrl: './morphology-create.component.css'
})
export class MorphologyCreateComponent implements OnInit, OnDestroy{
  form!: FormGroup;
  breeds:BreedDTO[]=[]
  $destroyed= new Subject<boolean>()
  messages:Message[]=[]

  constructor(private readonly _formBuilder: FormBuilder,
              private readonly _dogService: DogService,
              private readonly ref: DynamicDialogRef,
              private readonly _dialogService: DialogService) {
    this.form = this._formBuilder.group({
      coat: this._formBuilder.control('', Validators.required),
      height: this._formBuilder.control(null, [Validators.required, Validators.min(0)]),
      chestPerimeter: this._formBuilder.control(null, [Validators.required, Validators.min(0)]),
      frontBackProportion: this._formBuilder.control(null, [Validators.required, Validators.min(0)]),
      headMorphology: this._formBuilder.control('', Validators.required),
      notes: this._formBuilder.control('', Validators.required),
      breedId: this._formBuilder.control('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.getBreeds()
  }

  getBreeds(): void {
    this._dogService.getAllBreed()
      .pipe(takeUntil(this.$destroyed))
      .subscribe({
        next: (value) => {
          this.breeds = value
        },
        error: (error) => {
          this.messages = [{
            severity: "error",
            summary: error.error.detail,
            detail: error.error.message
          }]
        }
      });
  }

  create(){
    this._dogService.createMorphology(this.form.value).subscribe((value)=> {
      this._dogService.morphologyId = value;
      this.ref.close();
    })
  }

  showCreateBreed() {
    const ref = this._dialogService.open(BreedCreateComponent,{
      header: 'Création de race',
      width: '70%',
      height: '70%',
      baseZIndex: 10000,
      maximizable: true
    });
    ref.onClose.subscribe(()=> this.ngOnInit())
  }

  ngOnDestroy(): void {
      this.$destroyed.next(true);
      this.$destroyed.complete();
  }

}
