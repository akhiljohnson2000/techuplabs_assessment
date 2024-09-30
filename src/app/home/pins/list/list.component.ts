import { Component, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {CreateCustomerComponent} from '../../customers/create-customer/create-customer.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  
  pins = [
    { title: 'Pin 1', collaborator: 'Customer 1', privacy: 'Public' },
    { title: 'Pin 2', collaborator: 'Customer 2', privacy: 'Private' },
    { title: 'Pin 3', collaborator: 'Customer 3', privacy: 'Public' },
    { title: 'Pin 4', collaborator: 'Customer 4', privacy: 'Private' }
  ];

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }
}
