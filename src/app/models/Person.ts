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
  street: string,
  number: number,
  box: string,
  zip: number,
  city: string,
  country: string,
}
