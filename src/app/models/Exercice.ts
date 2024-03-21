export interface ExerciceShortDTO{
  id: number,
  name: string,
  isDone: boolean
}

export interface ExerciceFullDTO{
  id: number,
  name: string,
  isDone: boolean,
  description: string,
  date: Date
}

export interface ExerciceForm{
  name: string,
  description: string
}

export interface ExerciceDisplay{
  id: number,
  exercices: ExerciceFullDTO[]
}

