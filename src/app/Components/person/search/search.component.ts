import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConfirmationService, Message} from "primeng/api";
import {PersonSearchForm, PersonShortDto} from "../../../models/Person";
import {PersonService} from "../../../services/person.service";
import {debounceTime, Subject, takeUntil} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../services/user.service";




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit, OnDestroy{
  messages: Message[]=[]
  form!: FormGroup
  $destroyed= new Subject<boolean>()
  tabSearch: PersonShortDto[]=[]

  constructor(private readonly _personService:PersonService,
              private readonly _formBuilder: FormBuilder,
              private readonly _confirmationService: ConfirmationService,
              private readonly _userService: UserService) {
    this.form = this._formBuilder.group({
      firstName: this._formBuilder.control(''),
      lastName: this._formBuilder.control(''),
      phoneNumber: this._formBuilder.control('')
    })
  }

  ngOnInit() {
    this.search(this.form.value)
    this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => {
        this.search(value)

      });

  }

  private search(form: PersonSearchForm){
    this._personService.search(form)
      .pipe(takeUntil(this.$destroyed))
      .subscribe({
        next:(value) => {
          this.tabSearch = value
        },
        error:(err) => this.messages=[{severity:"error", summary: err.detail, detail: err.messages}],
        complete:()=> this.messages=[{severity: "success", summary: "200", detail:"Chargement terminé"}]
      })
  }

  confirm(event:Event, id: number){
    if (!event.target) {
      console.error('Event target is null');
      return;
    }
    this._confirmationService.confirm({
      target: event.target,
      message: "Voulez- vous supprimer ce client?",
      icon: "pi pi-eclamation-triangle",
      accept: () => {
        this.delete(id)
        this.deleteAccount(id)
      },
      reject: () =>this.messages.push({severity: 'warn', detail: 'Suppression annulée'})
    })
  }

  confirmAccount(event:Event, id: number){
    if (!event.target) {
      console.error('Event target is null');
      return;
    }
    this._confirmationService.confirm({
      target: event.target,
      message: "Voulez- vous supprimer ce compte",
      icon: "pi pi-eclamation-triangle",
      accept: () => {
        this.deleteAccount(id)
      },
      reject: () =>this.messages.push({severity: 'warn', detail: 'Suppression annulée'})
    })
  }

  create(id: number){
    this._userService.create(id)
    this.messages.push({severity:'success', summary:'Success', detail:'Invitation envoyée'});
  }

  delete(id: number){
    this._personService.delete(id).pipe(
      takeUntil(this.$destroyed)
    ).subscribe(
      () => {
        this.messages.push({severity:'success', summary:'Success', detail:'Client supprimé'});
        this.search(this.form.value);
      },
      (error) => {
        this.messages.push({severity:'error', summary:'Error', detail:error.detail});
      }
    );
  }

  deleteAccount(id: number){
    this._userService.delete(id).pipe(takeUntil(this.$destroyed))
      .subscribe({
          next: () => {
            this.messages.push({severity: 'success', summary: 'Success', detail: 'Compte supprimé'});
            this.ngOnInit();
          },
          error: (err) => {this.messages.push({severity:'error', summary:'Error', detail: err.detail});}
        }
      )
  }

  ngOnDestroy() {
    this.$destroyed.next(true)
    this.$destroyed.complete();
  }

}
