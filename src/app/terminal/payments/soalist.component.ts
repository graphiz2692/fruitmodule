import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-soalist',
  templateUrl: './soalist.component.html',
  styleUrls: ['./soalist.component.scss']
})
export class SoalistComponent implements OnInit {

  public isCollapsed: boolean = false;
  constructor( private modalService: NgbModal) {  }
  
  public billingCostSheet :any[]= 
  [{bookingbilno:'1001',orderno:'',bookingtype:'',ordertype:'',
vesselname:'',voyageno:'',agent:'',customer:'',forwarder:'',action:''},
{bookingbilno:'1002',orderno:'',bookingtype:'',ordertype:'',
vesselname:'',voyageno:'',agent:'',customer:'',forwarder:'',action:''},
{bookingbilno:'1003',orderno:'',bookingtype:'',ordertype:'',
vesselname:'',voyageno:'',agent:'',customer:'',forwarder:'',action:''},
];



toggle(){
  this.isCollapsed = !this.isCollapsed;
}
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
