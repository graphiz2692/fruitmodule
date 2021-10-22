import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashinvoices',
  templateUrl: './cashinvoices.component.html',
  styleUrls: ['./cashinvoices.component.scss']
})
export class CashinvoicesComponent implements OnInit {

  public isCollapsed: boolean = false;
  constructor() { }

  toggle(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit(): void {
  }

  public billingCreditInvoice :any[]= [ 
    {invoiceno:'001', invoicedate:'',customername:'',action:''},
    {invoiceno:'002', invoicedate:'', customername:'',action:''}];

}
