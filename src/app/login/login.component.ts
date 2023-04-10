import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  MyfaEnvelope = faEnvelope;
  MyfaUnlockKeyhole = faUnlockKeyhole;

  form = new FormGroup({
    login: new FormControl<null>(null, Validators.required),
    password: new FormControl<null>(null, Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}

  submitForm() {
    if (this.form.invalid) {
      return;
    }

    this.authService
      .login(
        this.form.get(['login'])?.value,
        this.form.get(['password'])?.value
      )
      .subscribe((response) => {
        // console.log(response)
        this.router.navigate(['/chat']);
      });
    (error: any) => {
      console.log(error);
    };
  }
}
