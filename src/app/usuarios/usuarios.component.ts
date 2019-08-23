import { Component, OnInit } from '@angular/core';
import {UsuarioService} from './services/usuario.service';
import {UsuariosResponse} from './interfaces/usuario-response.interface';
import {Usuario} from './interfaces/usuario.interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  id: string;
  // public editable = false;
  userSelected = 'all';
  mySearch = '';
  public usuarios: Usuario[];
  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.getUsuarios();
  }
  getUsuarios(search = null) {
    let buscar;
    if (search !== null) {
      buscar = this.mySearch;
      search = true;
      console.log('Esto es lo que buscaste: ' + buscar);
    } else {
      buscar = this.userSelected;
      search = false;
    }
    console.log(buscar);
    this.usuarioService.getUsuarios(buscar, search).subscribe((respuesta: UsuariosResponse) => {
      this.usuarios = respuesta.data;
      console.log(respuesta);
    });
  }
}
