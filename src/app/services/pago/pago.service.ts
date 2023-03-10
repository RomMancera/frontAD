import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PagoService {

  URL='http://localhost:3000/api/';
  constructor(private http: HttpClient) { }

  getPagos(){
    return this.http.get(`${this.URL}pagos`);
  }

}
