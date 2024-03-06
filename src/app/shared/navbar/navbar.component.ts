import {Component, OnInit} from '@angular/core';
import {MegaMenuItem, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  items!: MegaMenuItem[]
  ngOnInit() {
    this.items= [
      {label:"Acceuil", routerLink:"/home"},
      {label:"Client", routerLink:"/client"},
      {label:"Chien", routerLink:"/chien" },
      {label:"Rendez-vous"},
      {icon: PrimeIcons.POWER_OFF, routerLink:"/user/login"}
    ]
  }


}
