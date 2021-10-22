import { Component, OnInit } from '@angular/core';
import { FreightServiceService } from '../freight-service.service';
import { VesselInformation } from '../vessel-information';
import {FormGroup,FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-vesselprofilesearch',
  templateUrl: './vesselprofilesearch.component.html',
  styleUrls: ['./vesselprofilesearch.component.scss']
})
export class VesselprofilesearchComponent implements OnInit {

addUser:VesselInformation=new VesselInformation()
  constructor(private s1:FreightServiceService) { }
data;
  ngOnInit(): void {
    this.s1.getVesselDetails().subscribe((d)=>this.data=d)
  }
  filtered:any = [
    '27-CONTAINER CONVENTIONAL',
 '28-BULK CARGO',
 '29-RORO'
  ];
  status=[
    'CANCELLED','CLOSED','COMPLETED','CREATED','PENDING','PLANNED','PROGRESS','UNPLANED'
  ]
  trailerType=['LOW LOADER','NORMAL TRAILER','SIDE LOADER TRAILER','TIPPER TRAILER']

vesselDetails:FormGroup=new FormGroup({
  VESSELID:new FormControl("",[Validators.required]),
  VESSELNAME:new FormControl("",[Validators.required]),
  VESSELTYPE:new FormControl("",[Validators.required]),
  CALLSIGNNO:new FormControl("",[Validators.required])
})

  fun1(){
    this.addUser.VESSELID=this.vesselDetails.value.VESSELID,
      this.addUser.VESSELNAME=this.vesselDetails.value.VESSELNAME,
      this.addUser.VESSELTYPE=this.vesselDetails.value.VESSELTYPE,
      this.addUser.CALLSIGNNO=this.vesselDetails.value.CALLSIGNNO
    this.s1.postVesselDetails(this.addUser).subscribe((e)=>{
      if(this.vesselDetails.valid==false){
        alert("Enter data")
      }
      else{
        this.addUser=e,
        this.addUser.VESSELID=e.VESSELID,
        this.addUser.VESSELNAME=e.VESSELNAME,
        this.addUser.VESSELTYPE=e.VESSELTYPE,
        this.addUser.CALLSIGNNO=e.CALLSIGNNO,
        this.vesselDetails.reset();
        this.data.push(this.addUser)
        alert("Data saved successfully")
      }

    })
    
  }
 
}