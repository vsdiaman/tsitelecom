import { Component, OnInit } from '@angular/core';
import { faEnvelope, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  MyfaEnvelope = faEnvelope;
  MyfaUnlockKeyhole = faUnlockKeyhole;

  public username: string = '';
  password: string = '';
  constructor() {
    this.username = 'username teste';
    this.password = 'senha teste';
  }
  ngOnInit(): void {
    // Aqui você pode adicionar a lógica para autenticar o usuário
  }
}
