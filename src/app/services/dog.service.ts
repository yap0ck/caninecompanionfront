import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {DogForm, DogFullDTO, DogSearchForm, DogShortDTO} from "../models/Dog";
import {BreedDTO, BreedForm} from "../models/Breed";
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
  create(form: DogForm){
    return this._httpClient.post(this._apiUrl+'/dog/', form)
  }
  search(form: DogSearchForm){
    console.log(form)
    return this._httpClient.post<DogShortDTO[]>(this._apiUrl+'/dog/search', form)
  }

  //Breed
  getOne(id:number): Observable<BreedDTO>{
    return this._httpClient.get<BreedDTO>(this._apiUrl+'/breed/'+id)
  }
  createBreed(form: BreedForm){
    return this._httpClient.post(this._apiUrl+'/breed', form)
  }
  getAllBreed(): Observable<BreedDTO[]>{
    return this._httpClient.get<BreedDTO[]>(this._apiUrl+'/breed')
  }

  //Weight
  getOneByDog(id: number): Observable<WeightOneDTO>{
    return this._httpClient.get<WeightOneDTO>(this._apiUrl+'/weight/'+id)
  }
}
