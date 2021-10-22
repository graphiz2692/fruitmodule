import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ordertypes',
  templateUrl: './ordertypes.component.html',
  styleUrls: ['./ordertypes.component.scss']
})
export class OrdertypesComponent implements OnInit {

   
  public dsSearchResult = [
    {pcode: '5662',desc: 'LKB-LCB(1)',sr: 'LKB',qty: 'LCB',uom: 'LKB ESCO',custlotno: 'LCB PORT',contpltno: '132',batchno: '0', lotno: '0',
    active:'',Action: ''},
  
    {pcode: '7813',desc: 'BANGNA-LCB',sr: 'BANG NA',qty: 'LCB PORT',uom: 'BANG NA CD1',custlotno: 'LCB PORT',contpltno: '159',batchno: '0', lotno: '0',
     active:'',Action: ''},
  
  ];
  constructor( private modalService: NgbModal,) {  }

  ngOnInit(): void {
  }


  

  LargeOpen1(largemodal1) {
    this.modalService.open(largemodal1, { size: 'sm' });
  }

  
  LargeOpen2(largemodal2) {
    this.modalService.open(largemodal2, { size: 'sm' });
  }
   
  LargeOpen3(largemodal3) {
    this.modalService.open(largemodal3, { size: 'sm' });
  }
}
