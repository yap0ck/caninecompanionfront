import {DogShortDTO} from "./Dog";
import {Time} from "@angular/common";

export interface AppointmentAllDTO{
  id: number,
  schedulded: Date,
  dogs: DogShortDTO[]
}

export interface AppointmentForm{
  scheduled: Date,
  comment: string,
  dogIds: number[]
}

export interface AppointmentOneDTO{
  id: number,
  schedulded: Date,
  start: Date,
  end: Date,
  firstMeeting: boolean,
  comment: string,
  dogs: DogShortDTO[]
}
