import {Component, OnDestroy, OnInit} from '@angular/core';
import {Message} from "primeng/api";
import {PersonSearchForm, PersonShortDto} from "../../../models/Person";
import {PersonService} from "../../../services/person.service";
import {BehaviorSubject, catchError, debounceTime, of, Subject, switchMap, takeUntil} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

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
              private readonly _router: Router,
              private readonly route: ActivatedRoute) {
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
          console.log(value)
        },
        error:(err) => this.messages=[{severity:"error", summary: err.detail, detail: err.messages}],
        complete:()=> this.messages=[{severity: "success", summary: "200", detail:"Chargement terminé"}]
      })
  }

  ngOnDestroy() {
    this.$destroyed.next(true)
    this.$destroyed.complete();
  }
}
