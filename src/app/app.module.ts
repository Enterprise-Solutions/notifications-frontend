import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FirebaseComponent } from './firebase/firebase.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsuariosComponent} from './usuarios/usuarios.component';
import { OnesignalComponent } from './onesignal/onesignal.component';
import { OnesignalNotificacionesComponent } from './onesignal/onesignal-notificaciones/onesignal-notificaciones.component';
import {FirebaseNotificacionesComponent} from './firebase/firebase-notificaciones/firebase-notificaciones.component';
import {Globals} from './Globals';


@NgModule({
  declarations: [
    AppComponent,
    FirebaseComponent,
    FirebaseNotificacionesComponent,
    UsuariosComponent,
    OnesignalComponent,
    OnesignalNotificacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
