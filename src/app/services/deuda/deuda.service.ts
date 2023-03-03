import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DeudaService {

  URL='http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  createDeuda(form: any){
    return this.http.post(`${this.URL}deudas`,form);
  }

  getDeudas(){
    return this.http.get(`${this.URL}deudas`);
  }

}
