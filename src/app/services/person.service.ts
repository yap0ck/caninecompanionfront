import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {PersonShortDto} from "../models/Person";
import {PageableParam, PagedResponse} from "../models/pageableParam";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private readonly _httpClient: HttpClient,
              @Inject('apiUrl') private _apiUrl:string) { }

  getAll(page: number, size: number, sort:string): Observable<HttpResponse<PagedResponse>>{
    return this._httpClient.get<PagedResponse>(this._apiUrl+'/client', {observe: 'response'})
  }
}
