import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {PersonSearchForm, PersonShortDto} from "../models/Person";
import {PageableParam, PagedResponse} from "../models/pageableParam";
import {BehaviorSubject, Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private readonly _httpClient: HttpClient,
              @Inject('apiUrl') private _apiUrl:string,) {  }




  getAll(): Observable<HttpResponse<PagedResponse>>{
    return this._httpClient.get<PagedResponse>(this._apiUrl+'/client', {observe: 'response'})
  }

  search(form: PersonSearchForm){
    return this._httpClient.post<PersonShortDto[]>(this._apiUrl+'/client/search', form)
  }
}
