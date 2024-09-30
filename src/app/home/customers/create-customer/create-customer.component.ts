import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { PinsApiService } from '../../pins/pins.services';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.scss'
})
export class CreateCustomerComponent implements OnInit{
  mapedCountryData:any = {};
  regionsAvailable:Array<String> = [];
  countriesAvailable:Array<String> = [];
  profileForm = new FormGroup({
    title: new FormControl(''),
    emailid: new FormControl(''),
    region: new FormControl(''),
    country: new FormControl('')
  });
  itemId:any;
  constructor(private pinsApiService: PinsApiService){
  }

  ngOnInit(): void {
    let countriesData_temp = JSON.parse(localStorage.getItem('countriesData') || '')
    for (const property in countriesData_temp) {
      if((countriesData_temp[property]?.region in this.mapedCountryData)){
        this.mapedCountryData[countriesData_temp[property]?.region].push({code:property,
          country:countriesData_temp[property]?.country,
          region:countriesData_temp[property]?.region
        });
      }else{
        this.regionsAvailable.push(countriesData_temp[property]?.region);
        this.mapedCountryData[countriesData_temp[property]?.region] = [];
        this.mapedCountryData[countriesData_temp[property]?.region].push({code:property,
          country:countriesData_temp[property]?.country,
          region:countriesData_temp[property]?.region
        });
      }
    };
    console.log(this.mapedCountryData)
    console.log(this.profileForm.value)


    this.profileForm.get("region")?.valueChanges?.subscribe((regionValue) => {
      if(regionValue){
      this.countriesAvailable = this.mapedCountryData[regionValue].map((regionData:any) => {
        return regionData.country;})
      }
    });
  }

  printFormData(event:any){
    console.log(event)
    console.log(this.profileForm.value)
  }

  getCountriesForRegion(){
   console.log(console.log(this.profileForm.value))
  }

  createCustomer(){
    
  }
}


