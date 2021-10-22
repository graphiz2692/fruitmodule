import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costsheetlist',
  templateUrl: './costsheetlist.component.html',
  styleUrls: ['./costsheetlist.component.scss']
})
export class CostsheetlistComponent implements OnInit {

  constructor() { }

  data=[
    { ORDERNO:2211, ACTION:31}
      ]
   
     col:string[]=['ORDERNO','ACTION']

  ngOnInit(): void {
  }

}
