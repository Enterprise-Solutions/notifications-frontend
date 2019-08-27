import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './services/firebase.service';


@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  seleccion = true;
  public notificacion = {
    to: 'topic',
    title: '',
    message: '',
    image: '',
    canal: []
  };
  // id: string;
  // public editable = false;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private FirebaseService: FirebaseService) { }

  ngOnInit() {}

  enviarNotificacion() {
    // console.log(form.form.value);
    this.FirebaseService.sendForm(this.notificacion).subscribe(
      (resultado: string) => {
        console.log(resultado);
      });
  }

  onChange() {
    console.log(this.seleccion);
  }
}
