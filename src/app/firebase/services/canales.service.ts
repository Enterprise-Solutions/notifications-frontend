import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CanalesService {

  url = 'http://localhost/firebase/notificaciones/index.php';

  constructor(
    private http: HttpClient
  ) { }

  sendForm(json) {
    return this.http.post(this.url, JSON.stringify(json),
      {headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'});
  }

}
