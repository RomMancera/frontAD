import { Deuda } from './../../../interfaces/deuda';
import { DeudaService } from './../../../services/deuda/deuda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deuda-list',
  templateUrl: './deuda-list.component.html',
  styleUrls: ['./deuda-list.component.css']
})
export class DeudaListComponent implements OnInit {
deuda: any;

constructor(private deudaS : DeudaService) { }

  ngOnInit(): void {

      this.deudaS.getDeudas().subscribe(
        (data:any)=>{
          this.deuda=data;
          console.log(this.deuda)
        }
      )

  }

}
