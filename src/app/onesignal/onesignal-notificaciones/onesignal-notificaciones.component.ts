import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {OneSignalService} from '../services/onesignal.service';
import {Notificacion} from '../interfaces/notificacion.interface';
import {NotificacionesResponse} from '../interfaces/notificacion-response.interface';

@Component({
  selector: 'app-onesignal-notificaciones',
  templateUrl: './onesignal-notificaciones.component.html',
  styleUrls: ['./onesignal-notificaciones.component.css']
})
export class OnesignalNotificacionesComponent implements OnInit {
  notificaciones: Notificacion[];
  constructor(
    private router: Router,
    private oneSignalService: OneSignalService

) { }

  ngOnInit() {
    this.getNotificaciones();
  }

  crearNotificacion() {
    this.router.navigate(['../onesignal']);
  }

  getNotificaciones() {
    this.oneSignalService.getNotificaciones('O').subscribe((respuesta: NotificacionesResponse) => {
      this.notificaciones = respuesta.data;
      console.log(respuesta);
    });
  }
}
