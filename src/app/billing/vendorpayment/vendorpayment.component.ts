import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendorpayment',
  templateUrl: './vendorpayment.component.html',
  styleUrls: ['./vendorpayment.component.scss']
})
export class VendorpaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public billingVendorInvoice :any[]= [ 
    {wono:'',repaircode:'001',containerno:'',size:'',eirno:'',
    responsibility:'',vat:'',vatamount:'',totalamount:''}, 
    {wono:'',repaircode:'001',containerno:'',size:'',eirno:'',
    responsibility:'',vat:'',vatamount:'',totalamount:''}];

}
