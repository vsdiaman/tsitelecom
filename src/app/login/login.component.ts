import { Component, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  MyfaLinkedin = faLinkedin;
  MyfaEnvelope = faEnvelope;
  MyfaUnlockKeyhole = faUnlockKeyhole;

  public username: string = '';
  password: string = '';
  constructor() {
    this.username = 'username teste';
    this.password = 'senha teste';
  }
  ngOnInit() {
    // Aqui você pode adicionar a lógica para autenticar o usuário
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
