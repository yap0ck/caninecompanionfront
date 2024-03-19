import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {DogForm, DogFullDTO, DogSearchForm, DogShortDTO, DogUpdateForm} from "../models/Dog";
import {BreedDTO, BreedForm} from "../models/Breed";
import {WeightAllDTO, WeightForm, WeightOneDTO} from "../models/Weight";
import {VaccineForm, VaccineShortDTO, VaccineUpdateForm} from "../models/Vaccine";
import {MorphologyForm} from "../models/Morphology";

@Injectable({
  providedIn: 'root'
})
export class DogService {
  morphologyId!:number;

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
    return this._httpClient.post<DogShortDTO[]>(this._apiUrl+'/dog/search', form)
  }
  getOneDog(id: number){
    return this._httpClient.get<DogFullDTO>(this._apiUrl+'/dog/'+id)
  }
  delete(id:number){
    return this._httpClient.delete(this._apiUrl+'/dog/'+id)
  }
  updateDog(form: DogUpdateForm, id: number){
    return this._httpClient.put(this._apiUrl+'/dog/'+id, form)
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
  GetAllWeightByDog(id: number){
    return this._httpClient.get<WeightAllDTO[]>(this._apiUrl+'/weight/all/'+id)
  }
  createWeight(form: WeightForm){
    return this._httpClient.post(this._apiUrl+'/weight/', form)
  }

  //Vaccine
  createVaccine(form: VaccineForm){
    return this._httpClient.post(this._apiUrl+'/vaccine', form)
  }
  getAllVaccine(id: number){
    return this._httpClient.get<VaccineShortDTO[]>(this._apiUrl+'/vaccine/all/'+id)
  }
  deleteVaccine(id: number){
    return this._httpClient.delete(this._apiUrl+'/vaccine/'+id)
  }
  updateVaccine(id:number, form: VaccineUpdateForm){
    return this._httpClient.put(this._apiUrl+'/vaccine/'+id, form)
  }

  //Morphology
  createMorphology(form: MorphologyForm){
    return this._httpClient.post<number>(this._apiUrl+'/morphology', form)
  }
}
