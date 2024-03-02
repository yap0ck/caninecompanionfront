export interface PersonShortDto{
  id: number,
  firstName: string,
  lastName: string,
  phoneNumber: string
}
export interface PersonSearchForm{
  firstName: string,
  lastName: string,
  phoneNumber: string
}

export interface PersonCreateForm{
  firstName: string,
  lastName: string,
  mail: string,
  phoneNumber: string,
  gender: string,
  adressId: number
}
