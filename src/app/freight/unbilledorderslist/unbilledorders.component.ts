import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unbilledorders',
  templateUrl: './unbilledorders.component.html',
  styleUrls: ['./unbilledorders.component.scss']
})
export class UnbilledorderslistComponent implements OnInit {

  constructor() { }
  data=[
    { ORDERNO:2211}
      ]
   
     col:string[]=['ORDERNO']
  ngOnInit(): void {
  }

}
