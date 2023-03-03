import { PagoFormComponent } from './components/pagos/pago-form/pago-form.component';
import { PagosListComponent } from './components/pagos/pagos-list/pagos-list.component';
import { DeudaPreviewComponent } from './components/deuda/deuda-preview/deuda-preview.component';
import { DeudaFormComponent } from './components/deuda/deuda-form/deuda-form.component';
import { DeudaListComponent } from './components/deuda/deuda-list/deuda-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';


const routes: Routes = [
  {
    path: 'deuda',
    component:DeudaListComponent
  },
  {
    path: 'deuda/new',
    component: DeudaFormComponent
  },
  {
    path: 'deuda/:orden',
    component: DeudaPreviewComponent
  },
  {
    path: 'pagos',
    component: PagosListComponent
  },
  {
    path: 'pagos/new',
    component: PagoFormComponent
  },
  {
    path: 'login',
    component:AuthComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
