import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL='http://localhost:3000/api/';
  constructor(private http: HttpClient) { }

  login(body:any){
    return this.http.post(`${this.URL}login`, body);
  }

}
