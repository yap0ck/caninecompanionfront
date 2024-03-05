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
  SHEPERD_HERDSMAN = 'Berger et Bouvier',
  PINSCHER_SCHNAUZER= 'Pinscher et Schnauzer',
  TERRIER = 'Terriers',
  TECKEL= 'Teckels',
  SPITZ_PRIMITIVE = 'Spitz et primitifs',
  HOUND_BLOODHOUND = 'Chiens courants, chiens de recherche au sang et races apparentées',
  POINTING = 'Chiens d\'arrêt',
  RETRIEVAL= 'Chiens rapporteurs de gibier',
  PLEASURE= 'Chiens d\'agrément et de compagnie',
  GREYHOUND= 'Lévriers',
  NOT_RECOGNIZED= 'Races non reconnues'
}

export enum DogSize{
  SMALL= 'Petit',
  AVERAGE= 'Moyen',
  BIG= 'Grand'
}
