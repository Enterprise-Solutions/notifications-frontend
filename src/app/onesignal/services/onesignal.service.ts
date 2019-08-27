import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OneSignalService {

  url = 'http://localhost/NotificationPHP';

  constructor(
    private http: HttpClient
  ) { }

  sendForm(data) {
    return this.http.post(`${this.url}/index.php?method=send_all`, JSON.stringify(data),
      {headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'});
  }

}
