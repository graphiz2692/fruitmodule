import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderinquiry',
  templateUrl: './orderinquiry.component.html',
  styleUrls: ['./orderinquiry.component.scss']
})
export class OrderinquiryComponent implements OnInit {

  constructor() { }

  data=[
    { ORDERNO:'', VESSELNAME:'',VOYAGENO:'',HOUSEBLNO:'',MANIFESTNO:'',SHIPPERNAME:'',CONSIGNEENAME:'',ORDERDATE:''}
      ]
   
     col:string[]=['ORDERNO', 'VESSELNAME','VOYAGENO','HOUSEBLNO','MANIFESTNO','SHIPPERNAME','CONSIGNEENAME','ORDERDATE']

  ngOnInit(): void {
  }

}
