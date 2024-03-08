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
  RAGE='Rage',
  MALADIE_DE_CARRE="Maladie de carré",
  HEPATITE_DE_RUBARTH="Hépatite de Rubarth",
  PARVOVIROSE= "Parvovirose",
  INFLUENZA= "Influenza",
  LEPTOSPIROSE= "Leptospirose",
  LEISHMANIOSE= "Leishmaniose",
  PIROPLASMOSE= "Piroplasmose",
  TOUX_DU_CHENIL= "Toux du chenil",
}
