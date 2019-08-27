import { Component, OnInit } from '@angular/core';
import {OneSignalService} from './services/onesignal.service';

@Component({
  selector: 'app-onesignal',
  templateUrl: './onesignal.component.html',
  styleUrls: ['./onesignal.component.css']
})
export class OnesignalComponent implements OnInit {
  seleccion = true;
  public notificacion = {
    to: 'all',
    mensajetitulo: '',
    mensaje: '',
    imagen: 'http://arsiv.cag.edu.tr/upload/2015/05/sports.png',
    segment: []
  }
  constructor(
    private oneSignalService: OneSignalService
  ) { }

  ngOnInit() {
    const OneSignal = window['OneSignal'] || [];

    OneSignal.push(function() {

      OneSignal.init({

        appId: 'ece757e4-9696-4b91-8c9a-31776a9adfd3',

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

  }


  enviarNotificacion(form) {
    // console.log(form.form.value, this.notificacion);
    this.oneSignalService.sendForm(this.notificacion).subscribe(
      (resultado: string) => {
        console.log(resultado);
      });
  }

  onChange() {
    console.log(this.seleccion);
  }

}
