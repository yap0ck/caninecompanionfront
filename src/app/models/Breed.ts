export interface BreedDTO{
  name: string,
  raceGroup: RaceGroup,
  size: DogSize,
  temperament: string
}

export interface BreedForm{
  name: string,
  raceGroup: RaceGroup,
  size: DogSize,
  temperament: String
}

export enum RaceGroup{
  SHEPERD_HERDSMAN,
  PINSCHER_SCHNAUZER,
  TERRIER,
  TECKEL,
  SPITZ_PRIMITIVE,
  HOUND_BLOODHOUND,
  POINTING,
  RETRIEVAL,
  PLEASURE,
  GREYHOUND,
  NOT_RECOGNIZED
}

export enum DogSize{
  SMALL,
  AVERAGE,
  BIG
}
