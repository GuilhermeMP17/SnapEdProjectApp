import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpClientService {

  constructor(private http: HttpClient) {}

  getToken(){
    let token = JSON.parse(localStorage.getItem("token"))   
    if(token){
      return token.access_token
    }
    return "Faça seu Login"
  }

  get(url) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.getToken()
      })
    };
    return this.http.get<any>(url, httpOptions);
  }

  post(url, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.getToken()
      })
    };

    return this.http.post<any>(url, data, httpOptions);
  }

  delete(url){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.getToken()
      })
    };

    return this.http.delete<any>(url, httpOptions);
  }

  put(url, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.getToken()
      })
    };

    return this.http.put<any>(url, data, httpOptions);
  }
  
}