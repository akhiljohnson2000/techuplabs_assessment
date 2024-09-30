import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PinsApiService } from '../../pins/pins.services';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.scss'
})
export class CreateCustomerComponent implements OnInit {
  mapedCountryData: any = {};
  regionsAvailable: Array<String> = [];
  countriesAvailable: Array<String> = [];
  customerCreationForm: any;
  itemId: any;

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.customerCreationForm = this.fb.group({
      title: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      region: ['', [Validators.required],],
      country: ['', [Validators.required]],
    })

    let countriesData_temp = JSON.parse(localStorage.getItem('countriesData') || '')
    for (const property in countriesData_temp) {
      if ((countriesData_temp[property]?.region in this.mapedCountryData)) {
        this.mapedCountryData[countriesData_temp[property]?.region].push({
          code: property,
          country: countriesData_temp[property]?.country,
          region: countriesData_temp[property]?.region
        });
      } else {
        this.regionsAvailable.push(countriesData_temp[property]?.region);
        this.mapedCountryData[countriesData_temp[property]?.region] = [];
        this.mapedCountryData[countriesData_temp[property]?.region].push({
          code: property,
          country: countriesData_temp[property]?.country,
          region: countriesData_temp[property]?.region
        });
      }
    };
    this.customerCreationForm.get("region")?.valueChanges?.subscribe((regionValue: any) => {
      if (regionValue) {
        this.countriesAvailable = this.mapedCountryData[regionValue].map((regionData: any) => {
          return regionData.country;
        })
      }
    });
  }

  createCustomer() {
    let customerData:any = localStorage.getItem("Customer") || '';
    if(customerData != "null"){
      customerData = JSON.parse(customerData);
    }else{
      customerData = [];
    }
    customerData?.push(this.customerCreationForm.value)
    localStorage.setItem("Customer", JSON.stringify(customerData))
    this.customerCreationForm.reset();
    customerData = undefined;
    this.modalService.hide('createCustomerModal');
  }
}


