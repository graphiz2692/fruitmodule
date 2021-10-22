import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gateoutlist',
  templateUrl: './gateoutlist.component.html',
  styleUrls: ['./gateoutlist.component.scss']
})
export class GateoutlistComponent implements OnInit {
  public isCollapsed: boolean = false;
  constructor() { }
  public dsSearchResult = [
    {pcode: '5662',desc: 'LKB-LCB(1)',sr: 'LKB',qty: 'LCB',uom: 'LKB ESCO',custlotno: 'LCB PORT',contpltno: '132',batchno: '0', lotno: '0',
    active:'',Action: ''},

    {pcode: '7813',desc: 'BANGNA-LCB',sr: 'BANG NA',qty: 'LCB PORT',uom: 'BANG NA CD1',custlotno: 'LCB PORT',contpltno: '159',batchno: '0', lotno: '0',
     active:'',Action: ''},

  ];

  ngOnInit(): void {
  }
  
  toggle(){
    this.isCollapsed = !this.isCollapsed;
  }
}
