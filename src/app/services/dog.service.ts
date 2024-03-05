import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {DogFullDTO, DogShortDTO} from "../models/Dog";
import {BreedDTO} from "../models/Breed";
import {WeightOneDTO} from "../models/Weight";

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private readonly _httpClient: HttpClient,
              @Inject('apiUrl') private _apiUrl:string) { }

  //Dog
  getAllByOwner(id: number): Observable<DogFullDTO[]>{
    return this._httpClient.get<DogFullDTO[]>(this._apiUrl+'/dog/all/'+id)
  }

  //Breed
  getOne(id:number): Observable<BreedDTO>{
    return this._httpClient.get<BreedDTO>(this._apiUrl+'/breed/'+id)
  }

  //Weight
  getOneByDog(id: number): Observable<WeightOneDTO>{
    return this._httpClient.get<WeightOneDTO>(this._apiUrl+'/weight/'+id)
  }
}
