import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './services/firebase.service';
import {CanalesResponse} from './interfaces/canales-response.interface';
import {Canal} from './interfaces/canales.interface';


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
  constructor(private FirebaseService: FirebaseService) { }

  ngOnInit() {
    this.getCanales();
  }

  enviarNotificacion() {
    // console.log(form.form.value);
    this.FirebaseService.sendForm(this.notificacion).subscribe(
      (resultado: string) => {
        console.log(resultado);
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

  saveImage(image) {
  console.log(image);
  }

}
