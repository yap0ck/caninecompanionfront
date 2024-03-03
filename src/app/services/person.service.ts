import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {PersonCreateForm, PersonFullDTO, PersonSearchForm, PersonShortDto} from "../models/Person";
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

  getOne(id: number): Observable<HttpResponse<PersonFullDTO>>{
    return this._httpClient.get<PersonFullDTO>(this._apiUrl+'/client/'+id, {observe: "response"})
  }

  delete(id: number){
    return this._httpClient.delete(this._apiUrl+'/client/'+id)
  }
}
