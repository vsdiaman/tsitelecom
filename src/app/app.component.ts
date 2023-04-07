import { Component, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './login/login.component.html',
  styleUrls: ['./login/login.component.css'],
})
export class AppComponent implements OnInit {
  MyfaLinkedin = faLinkedin;
  MyfaEnvelope = faEnvelope;
  MyfaUnlockKeyhole = faUnlockKeyhole;

  ngOnInit() {
    // Aqui você pode adicionar a lógica para autenticar o usuário
  }
}
