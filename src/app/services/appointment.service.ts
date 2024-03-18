import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppointmentAllDTO, AppointmentForm, AppointmentOneDTO} from "../models/Appointment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private readonly _httpClient: HttpClient,
              @Inject('apiUrl') private readonly _apiUrl: string) { }

  create(form: AppointmentForm){
    return this._httpClient.post(this._apiUrl+'/appointment', form)
  }

  startStop(id: number){
    return this._httpClient.get(this._apiUrl+'/appointment/'+id+'/startStop')
  }

  getOne(id: number){
    return this._httpClient.get<AppointmentOneDTO>(this._apiUrl+'/appointment/'+ id)
  }

  delete(id:number){
    return this._httpClient.delete(this._apiUrl+'/appointment/'+id)
  }

  getAllByOwner(id: number){
    return this._httpClient.get<AppointmentAllDTO[]>(this._apiUrl+'/appointment/owner/'+id)
  }

  getAllInFuture(){
    return this._httpClient.get<AppointmentAllDTO[]>(this._apiUrl+'/appointment/future')
  }
}

