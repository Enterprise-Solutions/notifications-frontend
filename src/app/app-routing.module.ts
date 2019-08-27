import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirebaseComponent} from './firebase/firebase.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {OnesignalComponent} from './onesignal/onesignal.component';
import {OnesignalNotificacionesComponent} from './onesignal/onesignal-notificaciones/onesignal-notificaciones.component';
import {FirebaseNotificacionesComponent} from './firebase/firebase-notificaciones/firebase-notificaciones.component';



const routes: Routes = [
  {path: '', redirectTo: 'usuarios', pathMatch: 'full'},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'firebase', component: FirebaseComponent},
  {path: 'fbNotifications', component: FirebaseNotificacionesComponent},
  {path: 'onesignal', component: OnesignalComponent},
  {path: 'osNotifications', component: OnesignalNotificacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
