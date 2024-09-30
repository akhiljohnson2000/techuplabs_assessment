import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers.router';
import { NgxSelectModule } from 'ngx-select-ex';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NgxSelectModule,
    FormsModule
  ],
  exports:[
    CustomersComponent,
  ]
})
export class CustomersModule { }
