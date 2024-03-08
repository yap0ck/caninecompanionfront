import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConfirmationService, Message} from "primeng/api";
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime, Subject, takeUntil} from "rxjs";
import {DogSearchForm, DogShortDTO} from "../../../models/Dog";
import {DogService} from "../../../services/dog.service";

@Component({
  selector: 'app-dog-search',
  templateUrl: './dog-search.component.html',
  styleUrl: './dog-search.component.css'
})
export class DogSearchComponent implements OnInit, OnDestroy{
  messages: Message[]=[];
  form!: FormGroup
  $destroyed= new Subject<boolean>()
  tabSearch: DogShortDTO[]=[]

  constructor(private readonly _dogService: DogService,
              private readonly _formBuilder: FormBuilder,
              private readonly _confirmationService: ConfirmationService) {
    this.form = this._formBuilder.group({
      firstName: this._formBuilder.control('')
    })
  }

  ngOnInit() {
    this.search(this.form.value)
    this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => {
        this.search(value)
      })
  }

  private search(form: DogSearchForm){
    this._dogService.search(form)
      .pipe(takeUntil(this.$destroyed))
      .subscribe({
        next:(value) =>{
          console.log(value)
          this.tabSearch = value
        },
        error: (err) => this.messages=[{severity:"error", summary: err.detail, detail: err.messages}]
      })
  }

  confirm(event:Event, id: number){
    if (!event.target) {
      console.error('Event target is null');
      return;
    }
    this._confirmationService.confirm({
      target: event.target,
      message: "Voulez- vous supprimer ce chien?",
      icon: "pi pi-eclamation-triangle",
      accept: () => {
        this.delete(id)
      },
      reject: () =>this.messages.push({severity: 'warn', detail: 'Suppression annulée'})
    })
  }

  delete(id:number){
    this._dogService.delete(id)
      .pipe(takeUntil(this.$destroyed))
      .subscribe({
        next:()=> {
          this.messages.push({severity:'success', summary:'Success', detail:'Chien supprimé'});
          this.ngOnInit()
        }
      })
  }

  ngOnDestroy() {
    this.$destroyed.next(true);
    this.$destroyed.complete();
  }
}
