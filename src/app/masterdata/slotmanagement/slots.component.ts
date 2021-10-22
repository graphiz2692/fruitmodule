import { Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';
@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})
export class SlotsComponent implements OnInit {

  
  public isCollapsed: boolean = false;
  constructor() { }
  public dsSearchResult :DataTable[]= [
  
    {slotid: '5662',yardcode: 'LKB-LCB(1)',effectivedate: '12/12/2020'},
    {slotid: '5662',yardcode: 'LKB-LCB(1)',effectivedate: '12/12/2020'},
    {slotid: '5662',yardcode: 'LKB-LCB(1)',effectivedate: '12/12/2020'},
    {slotid: '5662',yardcode: 'LKB-LCB(1)',effectivedate: '12/12/2020'},
    {slotid: '5662',yardcode: 'LKB-LCB(1)',effectivedate: '12/12/2020'},
    {slotid: '5662',yardcode: 'LKB-LCB(1)',effectivedate: '12/12/2020'},

 

  ];

  ngOnInit(): void {
  }
  
  toggle(){
    this.isCollapsed = !this.isCollapsed;
  }
}
