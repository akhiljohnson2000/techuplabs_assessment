import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { BsModalService } from 'ngx-bootstrap/modal';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-create-pin',
  templateUrl: './create-pin.component.html',
  styleUrl: './create-pin.component.scss'
})
export class CreatePinComponent implements OnInit{


  pinsCreationForm:any;
  usersAvailable:Array<any> = [];
  public uploader:FileUploader = new FileUploader(
    { url: URL,
      allowedFileType: ['image']}
  ); 
  public imageHover:boolean = false;
  imageFile:any;
  customerData:any;
  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.pinsCreationForm = this.fb.group({
      title: ['', Validators.required],
      image: ['', [Validators.required],],
      collaboratory: ['', [Validators.required]],
      privacy: ['private', [Validators.required]]
    })

    let usersData_temp = JSON.parse(localStorage.getItem('Customer') || '');
    if(usersData_temp?.length>0){
      this.usersAvailable = usersData_temp?.map((user: any) => {
        return user?.title;
      })
    }

    this.customerData = localStorage.getItem("Customer") || '';

  }

  dropped(event:any){
    this.imageFile = event;
    this.imageHover = true;
    this.pinsCreationForm.setValue({
      title: this.pinsCreationForm.value.title,
      collaboratory: this.pinsCreationForm.value.collaboratory,
      image: event,
      privacy: this.pinsCreationForm.value.privacy,
    })
  }

  
  createPin(){
    let pinsData:any = localStorage.getItem("pins");
    if(pinsData != null){
      pinsData = JSON.parse(pinsData);
    }else{
      pinsData = [];
    }
    let pinsDataMaped:any = {
      collaboratory : [],
      image : this.pinsCreationForm?.value?.image,
      privacy : this.pinsCreationForm?.value?.privacy,
      title : this.pinsCreationForm?.value?.title
    }
    
    this.customerData = JSON.parse(this.customerData);
    if(this.pinsCreationForm?.value?.collaboratory?.length > 0){
      this.pinsCreationForm?.value?.collaboratory?.forEach((collaboratory:any) => {
        if(typeof(this.customerData) == "object"){
          let checkForCustomerFullData:any = this.customerData.find((cus:any)=>{
            return cus.title == collaboratory;
          })
          if(checkForCustomerFullData){
            pinsDataMaped?.collaboratory?.push(checkForCustomerFullData)
          }
        }
      });
    }
    pinsData?.push(pinsDataMaped)
    localStorage.setItem("pins", JSON.stringify(pinsData))
    pinsData = undefined;
    this.pinsCreationForm.reset();
    this.modalService.hide('createPinModal');
    console.log(this.modalService.getModalsCount())
  }

  checkImageHover(){
    
  }
}
