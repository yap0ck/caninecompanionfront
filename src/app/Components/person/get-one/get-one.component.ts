import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonFullDTO} from "../../../models/Person";
import {map, Subject, takeUntil} from "rxjs";
import {PersonService} from "../../../services/person.service";
import {DialogService} from "primeng/dynamicdialog";
import {UpdateComponent} from "../update/update.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Messages} from "primeng/messages";
import {ConfirmationService, Message} from "primeng/api";
import {UserService} from "../../../services/user.service";
import {normalizeExtraEntryPoints} from "@angular-devkit/build-angular/src/tools/webpack/utils/helpers";

@Component({
  selector: 'app-get-one',
  templateUrl: './get-one.component.html',
  styleUrl: './get-one.component.css'
})
export class GetOneComponent implements OnInit, OnDestroy{
  person!: PersonFullDTO | null;
  $destroyed= new Subject<boolean>()
  messages: Message[]=[]

  constructor(private readonly _personService: PersonService,
              private readonly _activatedRoute: ActivatedRoute,
              private readonly _confirmationService: ConfirmationService,
              private readonly _router: Router,
              private readonly _dialogService: DialogService,
              private readonly _userService: UserService) {
}


  ngOnInit() {
    this._personService.getOne(this._activatedRoute.snapshot.params['id'])
      .pipe(map(response => response.body))
      .subscribe({
        next: value => this.person = value,
        error: (err)=> {
          this.messages = [{
            severity: "error",
            summary: err.error.summary,
            detail: err.error.detail
          }]
        }
    })
  }

  showUpdate(){
    const ref = this._dialogService.open(UpdateComponent,{
      header: 'Mise à jour',
      width: '70%',
      baseZIndex: 10000,
      maximizable: true,
      data: this.person
    });
    ref.onClose.subscribe(()=> this.ngOnInit())
  }

  confirm(event:Event){
    if (!event.target) {
      console.error('Event target is null');
      return;
    }
    this._confirmationService.confirm({
      target: event.target,
      message: "Voulez- vous supprimer ce client?",
      icon: "pi pi-eclamation-triangle",
      accept: () => this.delete(),
      reject: () =>this.messages.push({severity: 'warn', detail: 'Suppression annulée'})
    })
  }

  confirmAccount(event:Event){
    if (!event.target) {
      console.error('Event target is null');
      return;
    }
    this._confirmationService.confirm({
      target: event.target,
      message: "Voulez- vous supprimer ce compte",
      icon: "pi pi-eclamation-triangle",
      accept: () => {
        this.deleteAccount()
      },
      reject: () =>this.messages.push({severity: 'warn', detail: 'Suppression annulée'})
    })
  }

  delete(){
    this._personService.delete(this.person!.id).pipe(
      takeUntil(this.$destroyed)
    ).subscribe(
      () => {
        this.messages.push({severity:'success', summary:'Success', detail:'Client supprimé'});
        this.deleteAccount()
        this._router.navigate(["client/search"]);
      },
      (error) => {
        this.messages.push({severity:'error', summary:'Error', detail:error.detail});
      }
    );
  }

  deleteAccount(){
    this._userService.delete(this.person!.id).pipe(takeUntil(this.$destroyed))
      .subscribe({
        next: () => {
          this.messages.push({severity: 'success', summary: 'Success', detail: 'Compte supprimé'});
          this.ngOnInit();
        },
        error: (err) => {this.messages.push({severity:'error', summary:'Error', detail: err.detail});}
      }
      )
  }
  create(){
    this._userService.create(this.person!.id)
    this.messages.push({severity:'success', summary:'Success', detail:'Invitation envoyée'});
  }

  ngOnDestroy() {
      this.$destroyed.next(true);
      this.$destroyed.complete();
  }
}
