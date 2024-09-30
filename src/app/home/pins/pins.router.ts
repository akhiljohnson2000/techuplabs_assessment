import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PinsComponent } from './pins.component';
const pinroutes: Routes = [
  {
    path: '',
    component: PinsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(pinroutes)],
  exports: [RouterModule]
})
export class PinsRoutingModule { }