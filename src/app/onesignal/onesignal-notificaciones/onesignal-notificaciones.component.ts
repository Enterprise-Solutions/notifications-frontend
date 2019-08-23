import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-onesignal-notificaciones',
  templateUrl: './onesignal-notificaciones.component.html',
  styleUrls: ['./onesignal-notificaciones.component.css']
})
export class OnesignalNotificacionesComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  crearNotificacion() {
    this.router.navigate(['../onesignal']);
  }
}
