import { Component, OnInit } from '@angular/core';
import {CanalesService} from './services/canales.service';


@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  id: string;
  // public editable = false;

  constructor(private CanalService: CanalesService) { }

  ngOnInit() {

//     $('#include_image').change(function(e) {
//       if ($(this).prop('checked') === true) {
//         $('#image_url_group').show();
//         $('#image_url').prop('required', true);
//       } else {
//         $('#image_url_group').hide();
//         $('#image_url').prop('required', false);
//
//
//       }
//     });
//     $('#include_action').change(function(e) {
//       if ($(this).prop('checked') === true) {
//         $('#action_group').show();
//         $('#action_destination_group').show();
//         $('#action_destination').prop('required', true);
//       } else {
//         $('#action_group').hide();
//         $('#action_destination_group').hide();
//         $('#action_destination').prop('required', false);
//       }
//     });
//
//     $('#send_to1').change(function(e) {
//       const selectedVal = $('#send_to1 option:selected').val();
//       if (selectedVal === 'onesig') {
//         $('#segment_group').show();
//         $('.segment').show();
//         $('.send_to3').show();
//         $('#segment').prop('required', true);
//         $('#firebase_token_group').hide();
//         $('.firebase_api').hide();
//         $('.send_to2').hide();
//         $('#firebase_token').prop('required', false);
//       } else {
//         $('#topic_group').hide();
//         $('.segment').hide();
//         $('#topic').prop('required', false);
//         $('#firebase_token_group').show();
//         $('.send_to2').show();
//         $('.send_to3').hide();
//         $('#firebase_token').prop('required', true);
//       }
//     });
//
// // tslint:disable-next-line:only-arrow-functions
//     $('#send_to2').change(function(e) {
//       const selectedVal = $('#send_to2 option:selected').val();
//       if (selectedVal === 'topic') {
//         $('#topic_group').show();
//         $('#topic').prop('required', true);
//         $('#firebase_token_group').hide();
//         $('#firebase_token').prop('required', false);
//       } else {
//         $('#topic_group').hide();
//         $('#topic').prop('required', false);
//         $('#firebase_token_group').show();
//         $('#firebase_token').prop('required', true);
//       }
//     });

  }

  enviarMensaje(form) {
    this.CanalService.sendForm(form.value).subscribe(
      (resultado: string) => {
        this.id = resultado;
        console.log(resultado);
      });
    form.reset();
  }
}
