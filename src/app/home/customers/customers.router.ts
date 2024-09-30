import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
const pinroutes: Routes = [
  {
    path: '',
    component: CustomersComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(pinroutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }