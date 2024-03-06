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

  ngOnDestroy() {
    this.$destroyed.next(true);
    this.$destroyed.complete();
  }
}
