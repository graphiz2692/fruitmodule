import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-companybranch',
  templateUrl: './companybranch.component.html',
  styleUrls: ['./companybranch.component.scss']
})
export class CompanybranchComponent implements OnInit {
  
  constructor( private modalService: NgbModal,) { 
 }

ngOnInit(): void {
}


LargeOpen1(largemodal1) {
  this.modalService.open(largemodal1, { size: 'lg' });
}

LargeOpen2(largemodal2) {
  this.modalService.open(largemodal2, { size: 'lg' });
}

}
