import { Component, OnInit } from '@angular/core';
// import { faEnvelope, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  MyfaUser = faUser;
  MyfaEnvelope = faEnvelope;
  MyfaLock = faLock;

  public username: string = '';
  private password: string = '';
  private email: string = '';
  constructor() {
    this.username = 'username teste';
    this.password = 'senha teste';
    this.email = 'username teste';
  }
  ngOnInit() {
    // Aqui você pode adicionar a lógica para autenticar o usuário
  }
}
