import {ExerciceShortDTO} from "./Exercice";

export interface ActionPlanDTO{
  id: number,
  date: Date,
  exercices: ExerciceShortDTO[]
}

export interface ActionPlanForm{
  dogId: number,
  exercicesId: number[]
}

export interface ActionPlanUpdateForm{
  exercicesId: number[]
}
