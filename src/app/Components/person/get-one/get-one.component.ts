import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonFullDTO} from "../../../models/Person";
import {map, Subject, takeUntil} from "rxjs";
import {PersonService} from "../../../services/person.service";
import {ActivatedRoute} from "@angular/router";
import {Messages} from "primeng/messages";
import {Message} from "primeng/api";

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
              private readonly _activatedRoute: ActivatedRoute) {
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

  ngOnDestroy() {
      this.$destroyed.next(true);
      this.$destroyed.complete();
  }
}
