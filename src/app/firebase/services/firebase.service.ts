import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  url = 'http://localhost/firebase/notificaciones';

  constructor(
    private http: HttpClient
  ) { }

  sendForm(data) {
    return this.http.post(`${this.url}/index.php`, JSON.stringify(data),
      {headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'});
  }

}
