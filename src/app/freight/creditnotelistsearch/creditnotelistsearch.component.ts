import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditnotelistsearch',
  templateUrl: './creditnotelistsearch.component.html',
  styleUrls: ['./creditnotelistsearch.component.scss']
})
export class CreditnotelistsearchComponent implements OnInit {

  constructor() { }

  
  module = [
    {value: 'HAULAGE'},
    {value: 'DEPOT'},
    {value: 'WAREHOUSE'},
    {value: 'TRANSPORT'},
    {value: 'MANIFEST'},
    {value: '1STATS'},
    {value: 'PORT'},
    {value: 'SALES'},
    {value: 'BILLING'}
  ]
  movement = [
    {value: 'MOVEMENT'},
  ]

  data=[
    {INVOICENO: '',ORDERNO:'',CONTAINERKEY:'',SIZE:'',JOBNO: '', CHARGECODE:'', DESCRIPTION:'', BILLINGUNIT:'', CURR:'',EXRATE:'',QTY:'',PRICE:'',BASEAMT:'',LOCALAMT:''}
      ]
   
     col:string[]=['INVOICENO','ORDERNO','CONTAINERKEY','SIZE', 'JOBNO', 'CHARGECODE', 'DESCRIPTION', 'BILLINGUNIT', 'CURR', 'EXRATE', 'QTY', 'PRICE','BASEAMT','LOCALAMT']


  ngOnInit(): void {
  }

}
