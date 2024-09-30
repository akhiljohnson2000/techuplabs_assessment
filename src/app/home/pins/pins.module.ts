import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinsComponent } from './pins.component';
import { PinsRoutingModule } from './pins.router';
import { ListComponent } from './list/list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreateCustomerComponent } from '../customers/create-customer/create-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { NgxSelectModule } from 'ngx-select-ex';
import { CreatePinComponent } from './create-pin/create-pin.component';
import { FileUploadModule } from 'ng2-file-upload';



@NgModule({
  declarations: [
    PinsComponent,
    ListComponent,
    CreateCustomerComponent,
    CreatePinComponent],
  imports: [
    CommonModule,
    PinsRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgxSelectModule,
    FormsModule,
    FileUploadModule
  ],
  exports:[
    PinsComponent,
    CreateCustomerComponent,
    CreatePinComponent
  ],
  providers:[provideHttpClient()]
})
export class PinsModule { }
