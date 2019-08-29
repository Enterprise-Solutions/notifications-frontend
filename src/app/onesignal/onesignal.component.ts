import { Component, OnInit } from '@angular/core';
import {OneSignalService} from './services/onesignal.service';
import {Canal} from './interfaces/canal.interface';
import {UsuariosResponse} from '../usuarios/interfaces/usuario-response.interface';
import {CanalesResponse} from './interfaces/canales-response.interface';

@Component({
  selector: 'app-onesignal',
  templateUrl: './onesignal.component.html',
  styleUrls: ['./onesignal.component.css']
})
export class OnesignalComponent implements OnInit {
  urlImage = 'http://enterprise.elmejorhosting.online/images/';
  imageName: string;
  seleccion = true;
  public notificacion = {
    mensajetitulo: '',
    mensaje: '',
    // imagen: 'https://2.bp.blogspot.com/-aPgcJ-unaZo/W8uF-v8zn0I/AAAAAAAACtA/7Pb7fRU6LlY7pCvCivlcTpAHH3DFXQsMgCLcBGAs/s0/RIOT_256%2BALT02.png',
    imagen: '',
    segment: []
  }
  canales: Canal[];
  constructor(
    private oneSignalService: OneSignalService
  ) { }

  ngOnInit() {
    this.getCanales();
    const OneSignal = window['OneSignal'] || [];

    OneSignal.push(function() {

      OneSignal.init({

        // appId: 'ece757e4-9696-4b91-8c9a-31776a9adfd3',
        appId: '21c076da-ecc9-4d16-9f25-53d68097b32d',

      });

    });
    OneSignal.push(function() {

      /* These examples are all valid */

      var isPushSupported = OneSignal.isPushNotificationsSupported();

      if (isPushSupported) {

        // Push notifications are supported

        console.log('supported');

        OneSignal.isPushNotificationsEnabled(function(isEnabled) {

          if (isEnabled) {

            console.log("Push notifications are enabled!");

            OneSignal.getUserId(function(userId) {

              console.log("OneSignal User ID:", userId);

              // (Output) OneSignal User ID: 270a35cd-4dda-4b3f-b04e-41d7463a2316

              // document.getElementById('user_id').value = userId;

            });

          } else {

            console.log("Push notifications are not enabled yet.");

            OneSignal.push(function() {

              OneSignal.showHttpPrompt();

            });

          }

        });

      } else {

        // Push notifications are not supported

        console.log('Not Supported');

      }

    });
    this.onChange();
    this.onChange1();

  }


  enviarNotificacion(form) {
    // console.log(form.value);
    this.oneSignalService.sendForm(this.notificacion).subscribe(
      (resultado: string) => {
        console.log(resultado);
      });
  }

  guardarNotificacion() {
    this.oneSignalService.guardarNotificacion(this.notificacion).subscribe(
      (resultado: string) => {
        console.log(resultado);
      });
  }
  getCanales() {
    this.oneSignalService.getCanales().subscribe((respuesta: CanalesResponse) => {
      this.canales = respuesta.data;
      console.log(respuesta);
    });
  }

  onChange() {
    this.notificacion.segment = [];
    if (this.seleccion === true) {
      this.notificacion.segment[0] = 'all';
    }
    console.log(this.notificacion);
  }
  onChange1() {
    console.log(this.notificacion);
  }

  onChange2(event) {
    this.notificacion.imagen = this.urlImage + event.target.files[0].name;
    console.log(this.notificacion.imagen);
  }
}
