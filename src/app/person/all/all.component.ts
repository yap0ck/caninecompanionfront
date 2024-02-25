import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonService} from "../../services/person.service";
import {Subject, takeUntil} from "rxjs";
import {Message} from "primeng/api";
import {PersonShortDto} from "../../models/Person";

@Component({
  selector: 'app-get-all',
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent implements OnInit, OnDestroy{
  tab: PersonShortDto[]
  messages: Message[]
  $destroyed = new Subject<boolean>();
  constructor(private readonly _personService: PersonService) {
    this.messages=[]
    this.tab=[]
  }
  ngOnInit() {
    this._personService.getAll(1,20,"id").pipe(takeUntil(this.$destroyed))
      .subscribe({
        next: (value) => {
          this.tab = value.body?.content || [];
        },
        error: (err)=> this.messages=[{
          severity: "error",
          summary: err.error.status,
          detail: err.error.message
        }],
        complete: () => this.messages=[{
          severity: "success",
          summary: "Terminé",
          detail:"Chargement Terminé"
        }]
      })
    }

  ngOnDestroy() {
    this.$destroyed.next(true);
    this.$destroyed.complete();
  }
}
