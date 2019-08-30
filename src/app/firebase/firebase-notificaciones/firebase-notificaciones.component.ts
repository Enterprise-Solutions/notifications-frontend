import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';
import {Notificacion} from '../interfaces/firebase.interface';
import {NotificacionesResponse} from '../interfaces/firebase-response.interface';

@Component({
  selector: 'app-firebase-notificaciones',
  templateUrl: './firebase-notificaciones.component.html',
  styleUrls: ['./firebase-notificaciones.component.css']
})
export class FirebaseNotificacionesComponent implements OnInit {
  notificaciones: Notificacion[];

  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.getNotificaciones();
  }

  getNotificaciones() {
    this.firebaseService.getNotificaciones('F').subscribe((respuesta: NotificacionesResponse) => {
      this.notificaciones = respuesta.data;
      console.log(respuesta);
    });
  }

  crearNotificacion() {
    this.router.navigate(['../firebase']);
  }

}
