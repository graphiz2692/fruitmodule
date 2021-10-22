import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMerchantQuotationComponent } from '../add-merchant-quotation/add-merchant-quotation.component';

@Component({
  selector: 'app-merchantquotationsearch',
  templateUrl: './merchantquotationsearch.component.html',
  styleUrls: ['./merchantquotationsearch.component.scss']
})
export class MerchantquotationsearchComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  
  data=[
    {ACTION: 3,JOB:'MENTON',SHIPMENTTYPE:'SHIP',JOBCATEGORY:'CATEO',DESCRIPTION: 'DETILS', TYPESIZE:'SIZE', CURR:'CURR', SELLRATE:'', ESTCOST:'',MINAMT:'',MAXAMT:'',SLAB:''}
      ]
   
     col:string[]=['ACTION','JOB','SHIPMENTTYPE','JOBCATEGORY', 'DESCRIPTION', 'TYPESIZE', 'CURR', 'SELLRATE', 'ESTCOST', 'MINAMT', 'MAXAMT', 'SLAB']

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(AddMerchantQuotationComponent)
  }
}
