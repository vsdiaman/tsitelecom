import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  constructor(private apiService: ApiService) {
    // localStorage.getItem('vitor_auth')
    // this._isLoggedIn$.next(!!true)
  }

  login(login: string, password: string) {
    return this.apiService.login(login, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('vitor_auth', response.token);
        console.log(response.token);
      })
    );
  }
}
