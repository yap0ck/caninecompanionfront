import {ExerciceForm, ExerciceFullDTO, ExerciceShortDTO} from "./Exercice";

export interface ActionPlanDTO{
  id: number,
  date: Date,
  exercices: ExerciceFullDTO[]
}

export interface ActionPlanForm{
  dogId: number,
  exercices: ExerciceForm[]
}

export interface ActionPlanUpdateForm{
  exercicesId: number[]
}


