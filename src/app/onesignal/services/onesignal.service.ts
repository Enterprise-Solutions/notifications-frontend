import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../../Globals';


@Injectable({
  providedIn: 'root'
})
export class OneSignalService {
  constructor(
    private http: HttpClient,
    private globals: Globals
  ) { }

  sendForm(data) {
    return this.http.post(`${this.globals.API_ENDPOINT}/one_signal.php`, JSON.stringify(data),
      {headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'});
  }

  guardarNotificacion(data) {
    return this.http.post(`${this.globals.API_ENDPOINT}/AltaNotificaciones.php`, JSON.stringify(data),
      {headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'});
  }
  getCanales() {
    return this.http.get(`${this.globals.API_ENDPOINT}/ObtenerCanales.php`);
  }
  getNotificaciones(id) {
    return this.http.get(`${this.globals.API_ENDPOINT}/ObtenerNotificaciones.php?id=${id}`);
  }

}
