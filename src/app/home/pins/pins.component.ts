import { Component, OnInit } from '@angular/core';
import { PinsApiService } from './pins.services';
import { CONSTANTS } from '../../models/countries.model';

@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrl: './pins.component.scss'
})
export class PinsComponent {
  constructor(private pinsApiService: PinsApiService) {
  }

  ngOnInit(): void {
    this.pinsApiService.getCountries$().subscribe((value: any) => {
      if (value?.data) {
        localStorage.setItem("countriesData", JSON.stringify(value?.data))
      }
    },(error:any) => {
      let tempData = CONSTANTS.countries;
      localStorage.setItem("countriesData", JSON.stringify(tempData))
  })
  }

}