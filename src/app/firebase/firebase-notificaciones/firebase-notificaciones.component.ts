import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-firebase-notificaciones',
  templateUrl: './firebase-notificaciones.component.html',
  styleUrls: ['./firebase-notificaciones.component.css']
})
export class FirebaseNotificacionesComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  crearNotificacion() {
    this.router.navigate(['../firebase']);
  }
}
