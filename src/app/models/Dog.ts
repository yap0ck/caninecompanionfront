import {BreedDTO} from "./Breed";
import {PersonShortDto} from "./Person";

export interface DogForm{
  firstName: string,
  lastName: string,
  dateOfBirth: Date,
  sex: string,
  isSterilized: boolean,
  breedId: number,
  ownerId: number
}

export interface DogUpdateForm{
  firstName: string,
  lastName: string,
  dateOfBirth: Date,
  sex: string,
  isSterilized: boolean
}

export interface DogFullDTO{
  id: number,
  firstName: string,
  lastName: string,
  dateOfBirth: Date,
  sex: string,
  isSterilized: boolean,
  breed: BreedDTO,
  owner: PersonShortDto
}

export interface DogSearchForm{
  firstName: string
}

export interface DogShortDTO{
  id: number
  firstName: string,
  owner: PersonShortDto,
  breed: BreedDTO
}
