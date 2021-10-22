import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outstandingmovements',
  templateUrl: './outstandingmovements.component.html',
  styleUrls: ['./outstandingmovements.component.scss']
})
export class OutstandingmovementsComponent implements OnInit {

  constructor() { }

 
  data=[
    { ORDERNO:'', ORDERDATE:'',JOB:'',JOBCATEGORY:'',CUSTOMERNAME:'',CUSTOMERREF:'',PENDING:''}
      ]
   
     col:string[]=['ORDERNO', 'ORDERDATE','JOB','JOBCATEGORY','CUSTOMERNAME','CUSTOMERREF','PENDING']

      
     dataSource=[
    { ORDERNO:'', CONTAINERNO:'',TYPE:'',MOVEMENT:'',EF:'',IO:'',STATUS:''}
      ]
   
      displayedColumns:string[]=['JOBNO', 'CONTAINERNO','TYPE','MOVEMENT','EF','IO','STATUS']

      
  

  ngOnInit(): void {
  }

}
