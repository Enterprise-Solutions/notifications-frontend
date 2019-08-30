import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './services/firebase.service';
import {Canal} from './interfaces/firebase.interface';
import {CanalesResponse} from './interfaces/firebase-response.interface';
import {Router} from '@angular/router';


@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  seleccion = true;
  canales: Canal[];
  public notificacion = {
    to: 'topic',
    title: '',
    message: '',
    image: '',
    canal: [0]
  };
  // id: string;
  // public editable = false;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private FirebaseService: FirebaseService,
              private router: Router, ) { }

  ngOnInit() {
    this.getCanales();
  }

  enviarNotificacion() {
    // console.log(form.form.value);
    this.FirebaseService.sendForm(this.notificacion).subscribe(
      (resultado: string) => {
        this.addNotificaciones();
        this.volver();
        console.log(resultado);
      });
  }

  addNotificaciones() {
    this.FirebaseService.add(this.notificacion).subscribe(
      () => {
      });
  }

   getCanales() {
    this.FirebaseService.getCanales().subscribe((respuesta: CanalesResponse) => {
      this.canales = respuesta.data;
      console.log(respuesta);
    });
  }


 /* getValueCanales(valor) {
    const seleccion = valor.target.value;
    console.log(seleccion);
  }*/

  onChange() {
    console.log(this.notificacion);
  }

  volver() {
    this.router.navigate(['../fbNotifications'], );
  }


}
