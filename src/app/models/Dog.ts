import {BreedDTO} from "./Breed";

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
  id: number,
  firstName: string,
  lastName: string,
  dateOfBirth: Date,
  sex: string,
  isSterilized: boolean,
  breed: BreedDTO
}

export interface DogSearchForm{
  firstname: string
}

export interface DogShortDTO{
  firstName: string,
  ownerId: number,
  breedId: number
}
