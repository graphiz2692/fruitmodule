import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FreightServiceService } from '../freight-service.service';

@Component({
  selector: 'app-edit-container-request',
  templateUrl: './edit-container-request.component.html',
  styleUrls: ['./edit-container-request.component.scss']
})
export class EditContainerRequestComponent implements OnInit {
  Data;
  editConReq:FormGroup=new FormGroup({
    REQUESTNO:new FormControl("",[Validators.required]),
    SHIPPINGAGENT:new FormControl("",[Validators.required]),
    CONSIGNEE:new FormControl("",[Validators.required]),
    HAULERNAME:new FormControl("",[Validators.required])
  })
  constructor(private s1:FreightServiceService, private router:ActivatedRoute,public rt:Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
this.s1.getContainerReqId(this.router.snapshot.params.id).subscribe((d)=>{
  this.editConReq=new FormGroup({
    REQUESTNO:new FormControl(d['REQUESTNO']),
    SHIPPINGAGENT:new FormControl(d['SHIPPINGAGENT']),
    CONSIGNEE:new FormControl(d['CONSIGNEE']),
    HAULERNAME:new FormControl(d['HAULERNAME'])
  })
})


  }

  edit(){
    this.s1.updateContainerReq(this.router.snapshot.params.id,this.editConReq.value).subscribe((d)=>{console.log(d)})
    this.rt.navigate(['/freight/containerrequest'])
  }
}
