import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-yardmap',
  templateUrl: './yardmap.component.html',
  styleUrls: ['./yardmap.component.scss']
})
export class YardmapComponent implements OnInit {

 
  constructor( private modalService: NgbModal,) {  }

  ngOnInit(): void {
  }
  
  
   
  
  LargeOpen2(largemodal2) {
    this.modalService.open(largemodal2, { size: 'md' });
  } 
  
  LargeOpen1(largemodal1) {
    this.modalService.open(largemodal1, { size: 'md' });
  } 
  
  LargeOpen3(largemodal3) {
    this.modalService.open(largemodal3, { size: 'md' });
  } 

}






