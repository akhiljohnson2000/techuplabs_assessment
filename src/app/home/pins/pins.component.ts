import { Component, OnInit } from '@angular/core';
import { PinsApiService } from './pins.services';

@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrl: './pins.component.scss'
})
export class PinsComponent {
  constructor(private pinsApiService: PinsApiService){
  }

  ngOnInit(): void {
    this.pinsApiService.getCountries$().subscribe((value:any)=>{
      if(value?.data){
        localStorage.setItem("countriesData", JSON.stringify(value?.data))
      }
    })
  }

}