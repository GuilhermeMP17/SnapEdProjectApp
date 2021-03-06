//import { HttpClient } from '@angular/common/http';
import { HttpClientService } from "../../providers/http-client.service";
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClientService) {
  }

  getUser(){
     return this.http.get('http://localhost:54967/api/users');
  }
}
