import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActionPlanDTO, ActionPlanForm} from "../models/ActionPlan";
import {ExerciceCheckForm, ExerciceForm} from "../models/Exercice";

@Injectable({
  providedIn: 'root'
})
export class ActionPlanService {

  constructor(private readonly _httpClient: HttpClient,
              @Inject('apiUrl') private readonly _apiUrl: string) {  }

  //actionPlan
  createActionPlan(form: ActionPlanForm){
    return this._httpClient.post(this._apiUrl+'/actionplan/', form)
  }

  getAllByDog(id: number){
    return this._httpClient.get<ActionPlanDTO[]>(this._apiUrl+'/actionplan/dog/'+id)
  }

  getLatestByDog(id: number){
    return this._httpClient.get<ActionPlanDTO>(this._apiUrl+'/actionplan/dog/last/'+id)
  }

  //exercice
  createExercice(form: ExerciceForm){
    return this._httpClient.post(this._apiUrl+'/exercice/', form)
  }

  update(id: number, form: ExerciceCheckForm){
    return this._httpClient.put(this._apiUrl+'/exercice/'+id, form)
  }
}