import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-pago-form',
  templateUrl: './pago-form.component.html',
  styleUrls: ['./pago-form.component.css']
})
export class PagoFormComponent implements OnInit {
formPago! : FormGroup;
  constructor(private fb: FormBuilder) {

    this.formPago = fb.group({
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

  agregarPago(){

  }

}
