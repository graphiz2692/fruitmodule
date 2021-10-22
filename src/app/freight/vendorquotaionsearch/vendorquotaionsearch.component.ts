import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddVenderQuotationComponent } from '../add-vender-quotation/add-vender-quotation.component';

@Component({
  selector: 'app-vendorquotaionsearch',
  templateUrl: './vendorquotaionsearch.component.html',
  styleUrls: ['./vendorquotaionsearch.component.scss']
})
export class VendorquotaionsearchComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  data=[
    {ACTION: 3,JOB:'MENTON',SHIPMENTTYPE:'SHIP',JOBCATEGORY:'CATEO',DESCRIPTION: 'DETILS', TYPESIZE:'SIZE', CURR:'CURR', SELLRATE:'', ESTCOST:'',MINAMT:'',MAXAMT:'',SLAB:''}
      ]
   
     col:string[]=['ACTION','JOB','SHIPMENTTYPE','JOBCATEGORY', 'DESCRIPTION', 'TYPESIZE', 'CURR', 'SELLRATE', 'ESTCOST', 'MINAMT', 'MAXAMT', 'SLAB']

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(AddVenderQuotationComponent)
  }
}
