import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oderadvanceserch',
  templateUrl: './oderadvanceserch.component.html',
  styleUrls: ['./oderadvanceserch.component.scss']
})
export class OderadvanceserchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  filtered = [
    {value: 'ADVICED'},
    {value: 'NOT ADVISED'},
    {value: 'PENDING ACKNOWLEDGEMENT'}
  ];
  status=[
    'CANCELLED','CLOSED','COMPLETED','CREATED','PENDING','PLANNED','PROGRESS','UNPLANED'
  ]
  trailerType=['LOW LOADER','NORMAL TRAILER','SIDE LOADER TRAILER','TIPPER TRAILER']

}
