import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersModel } from './models/users.model';
import { ChatComponent } from './chat/chat/chat.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(login: string, password: string) {
    return this.http.post('login', { login, password });
  }
}
