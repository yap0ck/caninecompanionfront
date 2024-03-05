export interface DogForm{
  firstName: string,
  lastName: string,
  dateOfBirth: Date,
  sex: string,
  isSterilized: boolean,
  breedId: number,
  ownerId: number
}

export interface DogFullDTO{
  firstName: string,
  lastName: string,
  dateOfBirth: Date,
  sex: string,
  isSterilized: boolean,
  breedId: number
}

export interface dogSearchForm{
  firstname: string
}

export interface dogShortDTO{
  firstName: string,
  ownerId: number,
  breedId: number
}
