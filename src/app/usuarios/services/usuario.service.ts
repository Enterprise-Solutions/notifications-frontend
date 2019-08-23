import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost/apiNotification';

  constructor(
    private http: HttpClient
  ) { }
  getUsuarios(param, search) {
    return this.http.get(`${this.url}/ObtenerUsuarios.php?param=${param}&search=${search}`);
  }

}
