import {BreedDTO} from "./Breed";

export interface MorphologyDTO{
  coat: string,
  height: number,
  chestPerimeter: number,
  frontBackProportion: number,
  headMorphology: string,
  notes: string,
  breeds: BreedDTO[]
}

export interface MorphologyForm{
  coat: string,
  height: number,
  chestPerimeter: number,
  frontBackProportion: number,
  headMorphology: string,
  notes: string,
  breedId: number[],
}
