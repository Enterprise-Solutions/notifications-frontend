import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../../Globals';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
    private global: Globals
  ) { }
  getUsuarios(param, search) {
    return this.http.get(`${this.global.API_ENDPOINT}/ObtenerUsuarios.php?param=${param}&search=${search}`);
  }

}
