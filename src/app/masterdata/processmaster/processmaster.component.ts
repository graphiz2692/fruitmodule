import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-processmaster',
  templateUrl: './processmaster.component.html',
  styleUrls: ['./processmaster.component.scss']
})
export class ProcessmasterComponent implements OnInit {

  public isCollapsed: boolean = false;
 
 
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
