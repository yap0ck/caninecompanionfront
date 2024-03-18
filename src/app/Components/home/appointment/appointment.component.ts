import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppointmentAllDTO} from "../../../models/Appointment";
import {AppointmentService} from "../../../services/appointment.service";
import {Subject} from "rxjs";
import {Message} from "primeng/api";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent implements OnInit, OnDestroy{
  appointments: AppointmentAllDTO[]=[]
  $destroyed = new Subject<boolean>()
  messages: Message[]=[]
  today: AppointmentAllDTO[]=[]
  week: AppointmentAllDTO[]=[]
  later: AppointmentAllDTO[]=[]

  constructor(private readonly _appointmentService: AppointmentService) {
  }

  ngOnInit() {
    this._appointmentService.getAllInFuture().subscribe({
      next: value => {
        this.appointments = value
        this.appointments.map(e => {
          if (e.schedulded.getDate()=== new Date().getDate()) this.today.push(e);
          else if (e.schedulded.getDay() <= new Date().getDay() + 7) this.week.push(e);
          else this.later.push(e)
        })
      },
      error: (err) => this.messages.push({severity: 'error', summary: err.error.summary, detail: err.error.message})
    })
  }

  ngOnDestroy() {

  }
}
