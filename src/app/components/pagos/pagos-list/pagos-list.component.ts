import { PagoService } from './../../../services/pago/pago.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagos-list',
  templateUrl: './pagos-list.component.html',
  styleUrls: ['./pagos-list.component.css']
})
export class PagosListComponent implements OnInit {
pagos: any;
  constructor(private pagoS : PagoService) { }

  ngOnInit(): void {

    this.pagoS.getPagos().subscribe(
      (data:any)=>{
        this.pagos=data;
        console.log(this.pagos)
      }
    )

  }

}
