import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FreightServiceService } from '../freight-service.service';

@Component({
  selector: 'app-advicetable',
  templateUrl: './advicetable.component.html',
  styleUrls: ['./advicetable.component.scss']
})
export class AdvicetableComponent implements OnInit {
details:collectionAdviceModel=new collectionAdviceModel();
collectionAdviceData:FormGroup=new FormGroup({
  JOBNO:new FormControl("",[Validators.required]),
  EMPTYDEHIRE:new FormControl("",[Validators.required]),
  CONTAINERNO:new FormControl("",[Validators.required]),
  MOVEMENT:new FormControl("",[Validators.required]),
  PICKUPFROM:new FormControl("",[Validators.required]),
  DELIVERYTO:new FormControl("",[Validators.required]),
  CALLINGDATE:new FormControl("",[Validators.required]),
  EMPTYDATE1:new FormControl("",[Validators.required]),
  ACKNOWLEDGEBY:new FormControl("",[Validators.required]),
  REQUESTDATE:new FormControl("",[Validators.required]),
  EMPTYDATE2:new FormControl("",[Validators.required])
  ,ACKNOWLEDGEDATE:new FormControl("",[Validators.required]),
  REMARKS:new FormControl("",[Validators.required])
})
funSave(){
  this.details.JOBNO=this.collectionAdviceData.value.JOBNO;
  this.details.EMPTYDEHIRE=this.collectionAdviceData.value.EMPTYDEHIRE;
  this.details.CONTAINERNO=this.collectionAdviceData.value.CONTAINERNO;
  this.details.MOVEMENT=this.collectionAdviceData.value.MOVEMENT;
  this.details.PICKUPFROM=this.collectionAdviceData.value.PICKUPFROM;
  this.details.DELIVERYTO=this.collectionAdviceData.value.DELIVERYTO;
  this.details.CALLINGDATE=this.collectionAdviceData.value.CALLINGDATE;
  this.details.EMPTYDATE1=this.collectionAdviceData.value.EMPTYDATE1;
  this.details.ACKNOWLEDGEBY=this.collectionAdviceData.value.ACKNOWLEDGEBY;
  this.details.REQUESTDATE=this.collectionAdviceData.value.REQUESTDATE;
  this.details.EMPTYDATE2=this.collectionAdviceData.value.EMPTYDATE2;
  this.details.ACKNOWLEDGEDATE=this.collectionAdviceData.value.ACKNOWLEDGEDATE;
  this.details.REMARKS=this.collectionAdviceData.value.REMARKS;
  this.s1.postContainerAdviceDetails(this.details).subscribe((d)=>{
    if(this.collectionAdviceData.valid==false){
alert("Enter data")
    }
    else{
    this.details=d;
    this.collectionAdviceData.reset();
    alert("Data Saved successfully")
  }
  })
}
constructor(private s1:FreightServiceService) { }
    ngOnInit(): void {
  }

}
export class collectionAdviceModel{
  id:number;
  JOBNO:number;
  EMPTYDEHIRE:string;
  CONTAINERNO:number;
  MOVEMENT:string;
  PICKUPFROM:string;
  DELIVERYTO:string;
  CALLINGDATE:string;
  EMPTYDATE1:string;
  ACKNOWLEDGEBY:string;
  REQUESTDATE:string;
  EMPTYDATE2:string;
  ACKNOWLEDGEDATE:string;
  REMARKS:string;

}