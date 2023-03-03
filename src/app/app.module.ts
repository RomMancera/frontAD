import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeudaListComponent } from './components/deuda/deuda-list/deuda-list.component';
import { PagosListComponent } from './components/pagos/pagos-list/pagos-list.component';
import { DeudaFormComponent } from './components/deuda/deuda-form/deuda-form.component';
import { DeudaPreviewComponent } from './components/deuda/deuda-preview/deuda-preview.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './components/auth/auth.component';
import { PagoFormComponent } from './components/pagos/pago-form/pago-form.component';
import { PagoPreviewComponent } from './components/pagos/pago-preview/pago-preview.component';
import { UsuariosFormComponent } from './components/usuarios/usuarios-form/usuarios-form.component';
import { UsuariosListComponent } from './components/usuarios/usuarios-list/usuarios-list.component';
import { UsuariosPreviewComponent } from './components/usuarios/usuarios-preview/usuarios-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    DeudaListComponent,
    PagosListComponent,
    DeudaFormComponent,
    DeudaPreviewComponent,
    NavbarComponent,
    AuthComponent,
    PagoFormComponent,
    PagoPreviewComponent,
    UsuariosFormComponent,
    UsuariosListComponent,
    UsuariosPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
