import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonFullDTO} from "../../../models/Person";
import {map, Subject, takeUntil} from "rxjs";
import {PersonService} from "../../../services/person.service";
import {ActivatedRoute} from "@angular/router";
import {Message} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";
import {UpdateComponent} from "../update/update.component";

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
              private readonly _dialogService: DialogService) {
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

  ngOnDestroy() {
      this.$destroyed.next(true);
      this.$destroyed.complete();
  }
}
