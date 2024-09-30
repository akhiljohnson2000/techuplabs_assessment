import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {CreateCustomerComponent} from '../../customers/create-customer/create-customer.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
  
 
  pinsData:any;

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  ngOnInit(): void {
    this.pinsData = JSON.parse(localStorage.getItem("pins") || '');
  }
  
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

}
