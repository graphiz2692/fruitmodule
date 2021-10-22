import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-truckchargeterms',
  templateUrl: './truckchargeterms.component.html',
  styleUrls: ['./truckchargeterms.component.scss']
})
export class TruckchargetermsComponent implements OnInit {
  public isCollapsed: boolean = false
  constructor( private modalService: NgbModal,) {  }
  public mdtruckcharge: any[] = [
    {hauliercode: 'ECT',ordertype: 'BLIND GATE IN',movement: 'FULL IN',chargecode: 'SA001-CA',paymentterm
    : 'CREDIT',action: ''},
    {hauliercode: 'ECT',ordertype: 'BLIND GATE IN',movement: 'FULL IN',chargecode: 'SA001-CA',paymentterm
    : 'CREDIT',action: ''},
    {hauliercode: 'ECT',ordertype: 'BLIND GATE IN',movement: 'FULL IN',chargecode: 'SA001-CA',paymentterm
    : 'CREDIT',action: ''},
    {hauliercode: 'ECT',ordertype: 'BLIND GATE IN',movement: 'FULL IN',chargecode: 'SA001-CA',paymentterm
    : 'CREDIT',action: ''}        
  ];
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
