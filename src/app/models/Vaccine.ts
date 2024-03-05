export interface VaccineDTO{
  disease: Disease,
  lastBooster: Date,
  frequencies: number
}

export interface VaccineForm{
  disease: Disease,
  dateBooster: Date,
  dogId: number
}

export interface VaccineShortDTO{
  id: number,
  disease: Disease,
  lastBooster: Date,
  frequencies: number
}

export interface VaccineUpdateForm{
  date: Date
}

export enum Disease{
  RAGE,
  MALADIE_DE_CARRE,
  HEPATITE_DE_RUBARTH,
  PARVOVIROSE,
  INFLUENZA,
  LEPTOSPIROSE,
  LEISHMANIOSE,
  PIROPLASMOSE,
  TOUX_DU_CHENIL,
}
