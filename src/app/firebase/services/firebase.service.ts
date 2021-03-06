import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../../Globals';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  constructor(
    private http: HttpClient,
    private globals: Globals
  ) { }

  sendForm(data) {
    return this.http.post(`${this.globals.API_ENDPOINT}/index.php`, JSON.stringify(data),
      {headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'});
  }

  getCanales() {
    return this.http.get(`${this.globals.API_ENDPOINT}/ObtenerCanales.php`);
  }

  add(data) {
    return this.http.post(`${this.globals.API_ENDPOINT}/firebase/CrearNotificaciones.php?id=F`, JSON.stringify(data),
      {headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'});
  }

  getNotificaciones(id) {
    console.log(id);
    return this.http.get(`${this.globals.API_ENDPOINT}/firebase/ObtenerNotificaciones.php?id=${id}`);
  }

}
