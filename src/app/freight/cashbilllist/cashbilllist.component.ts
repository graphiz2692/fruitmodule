import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashbilllist',
  templateUrl: './cashbilllist.component.html',
  styleUrls: ['./cashbilllist.component.scss']
})
export class CashbilllistComponent implements OnInit {

  constructor() { }
  data=[
    { ACTION:'', INVOICENO:'',INVOICEDATE:'',CUSTOMERNAME:''}
      ]
   
     col:string[]=['ACTION', 'INVOICENO','INVOICEDATE','CUSTOMERNAME']

  ngOnInit(): void {
  }

}
