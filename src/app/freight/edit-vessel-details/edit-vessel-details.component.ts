import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FreightServiceService } from '../freight-service.service';

@Component({
  selector: 'app-edit-vessel-details',
  templateUrl: './edit-vessel-details.component.html',
  styleUrls: ['./edit-vessel-details.component.scss']
})
export class EditVesselDetailsComponent implements OnInit {
  vesselDetails:FormGroup=new FormGroup({
    VESSELID:new FormControl("",[Validators.required]),
    VESSELNAME:new FormControl("",[Validators.required]),
    VESSELTYPE:new FormControl("",[Validators.required]),
    CALLSIGNNO:new FormControl("",[Validators.required])
  })
  data;
  constructor(private s1:FreightServiceService, private route:ActivatedRoute,public rt:Router) { }

  ngOnInit(): void {
this.s1.getEditVesselDetails(this.route.snapshot.params.id).subscribe((d)=>{
  console.log(d)
  this.vesselDetails=new FormGroup({
    VESSELID:new FormControl(d['VESSELID']),
    VESSELNAME:new FormControl(d['VESSELNAME']),
    VESSELTYPE:new FormControl(d['VESSELTYPE']),
    CALLSIGNNO:new FormControl(d['CALLSIGNNO'])
  })
})
  }
  filtered:any = [
    '27-CONTAINER CONVENTIONAL',
 '28-BULK CARGO',
 '29-RORO'
  ];
edit(){
  this.s1.updateVesselDetails(this.route.snapshot.params.id,this.vesselDetails.value).subscribe((d)=>{
    console.warn(d);
  })
  this.rt.navigate(['/freight/vesselinformation'])
}

}
