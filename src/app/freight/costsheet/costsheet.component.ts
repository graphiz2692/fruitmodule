import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costsheet',
  templateUrl: './costsheet.component.html',
  styleUrls: ['./costsheet.component.scss']
})
export class CostsheetComponent implements OnInit {

  constructor() { }

  data=[
    { ACTION:31, ORDERNO:2211,CONTAINERKEY:'',CHARGECODE:'',CURR:'',EXRATE:'',BILLINGUNIT:'',QTY:'',PRICE:'',ACTUALAMT:'',DISCOUNTAMT:'',TOTALAMT:'',OUTPUTGST:'',INPUTGST:'',REMARKS:''}
      ]
   
     col:string[]=['ACTION', 'ORDERNO','CONTAINERKEY','CHARGECODE','CURR','EXRATE','BILLINGUNIT','QTY','PRICE','ACTUALAMT','DISCOUNTAMT','TOTALAMT','OUTPUTGST','INPUTGST','REMARKS']
  ngOnInit(): void {
  }

}
