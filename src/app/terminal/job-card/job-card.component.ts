import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  public isCollapsed: boolean = false;
  constructor() { }
  public dsSearchResult = [
    {transactionno: '',transactiondate: '',startdate: '',enddate: '',status: '',Action: ''},
    {transactionno: '',transactiondate: '',startdate: '',enddate: '',status: '',Action: ''},
    {transactionno: '',transactiondate: '',startdate: '',enddate: '',status: '',Action: ''}
  ];

  ngOnInit(): void {
  }
  
  toggle(){
    this.isCollapsed = !this.isCollapsed;
  }

}
