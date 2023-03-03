import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  auth : FormGroup;
  constructor(private fb: FormBuilder,
              private authS: AuthService) {

    this.auth = fb.group({
      correo:['', ],
      contraseña:['', ]
    });

  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.auth.value)
    this.authS.login(this.auth.value).subscribe(
      (data:any)=>{
        console.log(data)
      }
    )
  }

}
