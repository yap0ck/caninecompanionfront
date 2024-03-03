import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {PersonCreateForm, PersonSearchForm, PersonShortDto} from "../models/Person";
import {PageableParam, PagedResponse} from "../models/pageableParam";
import {BehaviorSubject, Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private readonly _httpClient: HttpClient,
              @Inject('apiUrl') private _apiUrl:string,) {  }


  search(form: PersonSearchForm){
    return this._httpClient.post<PersonShortDto[]>(this._apiUrl+'/client/search', form)
  }

  create(form: PersonCreateForm){
    return this._httpClient.post(this._apiUrl+'/client', form)
  }
}
