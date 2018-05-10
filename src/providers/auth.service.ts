import { Injectable, EventEmitter, ApplicationRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { HttpClientService } from './http-client.service';

//import { environment } from 'environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private httpSecured: HttpClientService) {

  }

  login(username: string, password: string) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    let body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', username);
    body.set('password', password);

    var request = this.http.post<any>(/*environment.host_url +*/ 'http://localhost:54967/api/security/token',
      body.toString(),
      { headers: headers });

    return request;
  }

  logout() {
    return this.httpSecured.post(/*environment.host_url +*/ '/api/user/logout', {});
  }

  forgotPassword(passwordRequest) {
    return this.http.post(/*environment.host_url +*/ '/api/user/forgot-password', passwordRequest);
  }

  resetPassword(passwordRequest){
    return this.http.post(/*environment.host_url +*/  '/api/user/reset-password', passwordRequest);
  }
}
