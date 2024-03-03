import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonFullDTO} from "../../../models/Person";
import {map, Subject, takeUntil} from "rxjs";
import {PersonService} from "../../../services/person.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Messages} from "primeng/messages";
import {ConfirmationService, Message} from "primeng/api";

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
              private readonly _router: Router) {
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

  delete(){
    this._personService.delete(this.person!.id).pipe(
      takeUntil(this.$destroyed)
    ).subscribe(
      () => {
        this.messages.push({severity:'success', summary:'Success', detail:'Client supprimé'});
        this._router.navigate(["client/search"]);
      },
      (error) => {
        this.messages.push({severity:'error', summary:'Error', detail:error.detail});
      }
    );
  }

  ngOnDestroy() {
      this.$destroyed.next(true);
      this.$destroyed.complete();
  }
}
