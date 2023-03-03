import { DeudaService } from './../../../services/deuda/deuda.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-deuda-form',
  templateUrl: './deuda-form.component.html',
  styleUrls: ['./deuda-form.component.css']
})
export class DeudaFormComponent implements OnInit {
formDeuda! : FormGroup;

  constructor(private fb: FormBuilder,
              private deudaS : DeudaService) {
    this.formDeuda = fb.group({
      orden:['', ],
      fecha_sistema:['', ],
      fecha_venta:['', ],
      unidad_negocio:['', ],
      retraso_dias:['', ],
      retraso_semanas:['', ],
      responsable:['', ],
      descripcion:['', ],
      cliente:['', ],
      deuda_inicial:['', ],
      pagos:['', ],
      deuda_final:['', ],
      notas:['', ],
      moneda:['', ]
    });
  }

  ngOnInit(): void {
  }
  agregarDeuda(){
    this.deudaS.createDeuda(this.formDeuda.value).subscribe(
      (data:any)=>{
        console.log(data)
      }
    )
  }
}
