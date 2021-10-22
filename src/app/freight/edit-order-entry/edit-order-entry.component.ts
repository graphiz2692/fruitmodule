import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FreightServiceService } from '../freight-service.service';

@Component({
  selector: 'app-edit-order-entry',
  templateUrl: './edit-order-entry.component.html',
  styleUrls: ['./edit-order-entry.component.scss']
})
export class EditOrderEntryComponent implements OnInit {
  editOrderEnt:FormGroup=new FormGroup({
ORDERNO:new FormControl("",[Validators.required]),
VOYAGENO:new FormControl("",[Validators.required]),
VESSELNAME:new FormControl("",[Validators.required]),
CUSTOMERNAME:new FormControl("",[Validators.required]),
AGENTNAME:new FormControl("",[Validators.required]),
CREATEDBY:new FormControl("",[Validators.required]),
STATUS:new FormControl("",[Validators.required])

  })
  constructor(private S1:FreightServiceService, private route:ActivatedRoute, private rt:Router) { }

  ngOnInit(): void {
    this.S1.getEditOrderEntry(this.route.snapshot.params.id).subscribe((d)=>{
      this.editOrderEnt=new FormGroup({
        ORDERNO:new FormControl(d['ORDERNO']),
        VOYAGENO:new FormControl(d['VOYAGENO']),
        VESSELNAME:new FormControl(d['VESSELNAME']),
        CUSTOMERNAME:new FormControl(d['CUSTOMERNAME']),
        AGENTNAME:new FormControl(d['AGENTNAME']),
        CREATEDBY:new FormControl(d['CREATEDBY']),
        STATUS:new FormControl(d['STATUS'])
    })

    })
  }
  update(){
    console.log(this.editOrderEnt.value)
    this.S1.updateVesselDetails(this.route.snapshot.params.id,this.editOrderEnt.value).subscribe((e)=>{
      console.warn(e)
    })
  }
}
