import { Component, OnInit } from '@angular/core';
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],

  templateUrl: './chat/chat/chat.component.html',
  styleUrls: ['./chat/chat/chat.component.css'],

  // templateUrl: './login/login.component.html',
  // templateUrl: './register/register.component.html',
  // styleUrls: ['./register/register.component.css'],
})
export class AppComponent implements OnInit {
  MyfaEnvelope = faEnvelope;
  MyfaUnlockKeyhole = faUnlockKeyhole;

  MyfaUser = faUser;
  MyfaLock = faLock;

  ngOnInit() {
    // Aqui você pode adicionar a lógica para autenticar o usuário
  }
}
