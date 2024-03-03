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

export interface PersonFullDTO{
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  gender: string,
  number: number,
  box: string,
  street: string,
  zip: number,
  city: number,
  country: number
}
