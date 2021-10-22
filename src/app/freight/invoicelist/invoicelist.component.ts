import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoicelist',
  templateUrl: './invoicelist.component.html',
  styleUrls: ['./invoicelist.component.scss']
})
export class InvoicelistComponent implements OnInit {

  constructor() { }

  data=[
    { ACTION:'', INVOICENO:'',INVOICEDATE:'',CUSTOMERNAME:''}
      ]
   
     col:string[]=['ACTION', 'INVOICENO','INVOICEDATE','CUSTOMERNAME']

  ngOnInit(): void {
  }

}
