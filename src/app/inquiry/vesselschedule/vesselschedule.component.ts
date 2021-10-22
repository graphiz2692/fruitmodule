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
  
  public inquiryVesselSchedule:any[]= 
  [{vesselname:'',voyageno:'',eta:'',etd:'',cutoffdate:'',
  cutofdate:'',terminal:'',loadingport:'',destinationport:''},
  {vesselname:'',voyageno:'',eta:'',etd:'',cutoffdate:'',
  cutofdate:'',terminal:'',loadingport:'',destinationport:''},
  {vesselname:'',voyageno:'',eta:'',etd:'',cutoffdate:'',
  cutofdate:'',terminal:'',loadingport:'',destinationport:''}];
    
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

	

  