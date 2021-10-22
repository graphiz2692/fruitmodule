import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookinginquiry',
  templateUrl: './bookinginquiry.component.html',
  styleUrls: ['./bookinginquiry.component.scss']
})
export class BookinginquiryComponent implements OnInit {

  constructor() { }
  booking = [
    {value: 'EXPORT'},
    {value: 'IMPORT'},
    {value: 'LOCAL'},
    {value: 'TRANSPERNT'}
  ];
  data=[
    { ORDERNO:'', CONTAINERNO:'',CONTAINERKEY:'',BOOKINGDATE:'',BOOKINGBLNO:'',BOOKINGTYPE:'',AGENTCODE:'',CUSTOMER:'',VESSELCODE:'',VOYAGENO:''}
      ]
   
     col:string[]=['ORDERNO', 'CONTAINERNO','CONTAINERKEY','BOOKINGDATE','BOOKINGBLNO','BOOKINGTYPE','AGENTCODE','CUSTOMER','VESSELCODE','VOYAGENO']

      

     dataSource=[
      { MOVEMENT:'', TRANSACTIONNO:'',MVMTDATE:'',STATUS:'',YARDLOCATION:''}
        ]
     
        displayedColumns:string[]=['MOVEMENT', 'TRANSACTIONNO','MVMTDATE','STATUS','YARDLOCATION']
  
  ngOnInit(): void {
  }

}
