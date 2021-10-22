import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MerchantquotationsearchComponent } from "../merchantquotationsearch/merchantquotationsearch.component";

@Component({
  selector: 'app-merchntquotation',
  templateUrl: './merchntquotation.component.html',
  styleUrls: ['./merchntquotation.component.scss']
})
export class MerchntquotationComponent implements OnInit {

  constructor(public dialog: MatDialog,private rt:Router) {}

  openDialog() {
    this.rt.navigate(['/freight/merchantQuotationSearch'])
 }
 

  data=[
    {ACTION:31,QUOTATIONNO:'SQHQ210800001',CUSTOMERNAME:'BC COMPANY', QUOTEDDATE:'8/13/2021',EFFECTIVE:'8/13/2021',EXPIRY: '8/31/2023', PREPAREDBY:'ASRC@GMAIL.COM', APPROVEDBY:'ASRC@GMAIL.COM', CANCELEDBY:''}
      ]
   
     col:string[]=['ACTION','QUOTATIONNO','CUSTOMERNAME', 'QUOTEDDATE','EFFECTIVE', 'EXPIRY', 'PREPAREDBY', 'APPROVEDBY', 'CANCELEDBY']

  ngOnInit(): void {
  }

}
