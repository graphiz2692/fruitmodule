import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';
import { DataTable2, SimpleDataTable } from 'src/app/shared/data/tables/data-table';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit, AfterViewInit {

  public simpleData = SimpleDataTable;
  public tableData = DataTable2;
  constructor() { }
  
  public dsSearchResult :DataTable[]= [
    {pcode: '5662',desc: 'LKB-LCB(1)',sr: 'LKB',qty: 'LCB',uom: 'LKB ESCO',custlotno: 'LCB PORT',contpltno: '132',batchno: '0', lotno: '0',
    active:'',Action: ''},

    {pcode: '7813',desc: 'BANGNA-LCB',sr: 'BANG NA',qty: 'LCB PORT',uom: 'BANG NA CD1',custlotno: 'LCB PORT',contpltno: '159',batchno: '0', lotno: '0',
     active:'',Action: ''},

  ];

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    let dataTable1 = new DataTable("#myTable1", {
      searchable: true,
      fixedHeight: true,
    });
  }



}
