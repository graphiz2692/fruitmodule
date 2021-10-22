import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.scss']
})
export class ChargesComponent implements OnInit {
  public isCollapsed: boolean = false;
  constructor( private modalService: NgbModal) {  }
  public dscharges :any[]= [
    {chargecode: 'CH0000001',description: 'CHARCHE CODE',module: 'FLEET', "":'GENERAL',billingunit
    : 'CONT',vat: '7',chargeterm: 'general', creditterm: '0',active:'',action: ''},
    {chargecode: 'labor',description: 'CHARCHE CODE',module: 'ICD', "":'VAS',billingunit
    : 'CONT',vat: '7',chargeterm: 'general', creditterm: '0',active:'',action: ''},
    {chargecode: 'CH0000001',description: 'DETERGENT WAS',module: 'ICD', "":'GENERAL',billingunit
    : 'CONT',vat: '7',chargeterm: 'general', creditterm: '7',active:'',action: ''},
    {chargecode: 'KT1',description: 'DETERGENT WAS',module: 'FLEET', "":'GENERAL',billingunit
    : 'CONT',vat: '7',chargeterm: 'general', creditterm: '30',active:'',action: ''}
  ];  
 

  ngOnInit(): void {
  }

  LargeOpen1(largemodal1) {
    this.modalService.open(largemodal1, { size: 'lg' });
  }
  
  LargeOpen2(largemodal2) {
    this.modalService.open(largemodal2, { size: 'lg' });
  }
  
  LargeOpen3(largemodal3) {
    this.modalService.open(largemodal3, { size: 'lg' });
  }
 
}

	

  