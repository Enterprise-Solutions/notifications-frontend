import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PrincipalComponent } from './principal/principal.component';
import {FormsModule} from '@angular/forms';
import {UsuariosComponent} from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
