import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { UsersModel } from './models/users.model';

// const jwt = require("jsonwebtoken");

// import * as jwt from 'jsonwebtoken';

export const FAKE_JWT_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDb2RlIFNob3RzIFdpdGggUHJvZmFuaXMiLCJpYXQiOjE2MjQyNzU1MjUsImV4cCI6MTY1NTgxMTUyNSwiYXVkIjoiQ29kZSBTaG90IFdpdGggUHJvZmFuaXMgU3Vic2NyaWJlcnMiLCJzdWIiOiJDb2RlIFNob3QgV2l0aCBQcm9mYW5pcyBTdWJzY3JpYmVycyIsIlVzZXJuYW1lIjoicHJvZmFuaXMiLCJGaXJzdE5hbWUiOiJGYW5pcyIsIlJvbGUiOlsiQWRtaW4iLCJTdXBlciBBZG1pbiJdfQ.mT1UD7DXTWRm4etsW9BuWcg5bj2CaeAQVXaoEOIwB7o';

@Injectable({ providedIn: 'root' })
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const { url, method, headers } = request;
    if (url.endsWith('login') && method === 'POST') {
      return handleLogin();
    }
    if (url.endsWith('password') && method === 'GET') {
      return handleLogin(); //consertar
    }
    return next.handle(request);

    function isLoggedIn() {
      return headers.get('authorization') === FAKE_JWT_TOKEN;
    }

    function handleLogin(): Observable<HttpEvent<unknown>> {
      return of(
        new HttpResponse({
          status: 200,
          body: {
            id: '1',
            username: 'vitor',
            token: FAKE_JWT_TOKEN,
          },
        })
      );
    }

    // function handleProducts(): Observable<HttpEvent<unknown>> {
    //   if (!isLoggedIn()) {
    //     return throwError({ status: 401, error: { message: 'Unauthorized' } });
    //   }

    //   const users: UsersModel[] = [...new Array(20).keys()].map((item) => ({
    //     id: item,
    //     users: `users`,
    //   }));

    //   return of(
    //     new HttpResponse({
    //       status: 200,
    //       body: users,
    //     })
    //   );
    // }
  }
}

export const FakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
