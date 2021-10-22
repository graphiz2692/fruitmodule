import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VendorquotaionsearchComponent } from "../vendorquotaionsearch/vendorquotaionsearch.component";

@Component({
  selector: 'app-vendorquotation',
  templateUrl: './vendorquotation.component.html',
  styleUrls: ['./vendorquotation.component.scss']
})
export class VendorquotationComponent implements OnInit {

  constructor(public dialog: MatDialog,private rt:Router) {}

  openDialog() {
this.rt.navigate(['/freight/venderQuotationSearch'])
 }
  data=[
    {ACTION:31,QUOTATIONNO:'SQHQ210800001',CUSTOMERNAME:'BC COMPANY', QUOTEDDATE:'8/13/2021',EFFECTIVE:'8/13/2021',EXPIRY: '8/31/2023', PREPAREDBY:'ASRC@GMAIL.COM', APPROVEDBY:'ASRC@GMAIL.COM', CANCELEDBY:''}
      ]
   
     col:string[]=['ACTION','QUOTATIONNO','CUSTOMERNAME', 'QUOTEDDATE','EFFECTIVE', 'EXPIRY', 'PREPAREDBY', 'APPROVEDBY', 'CANCELEDBY']

  ngOnInit(): void {
  }

}
