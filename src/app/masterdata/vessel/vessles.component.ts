import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vessles',
  templateUrl: './vessles.component.html',
  styleUrls: ['./vessles.component.scss']
})
export class VesslesComponent implements OnInit {

  public isCollapsed: boolean = false;

  constructor( private modalService: NgbModal,) {  }

  public mdvesselmaster = [
    {vesselcode: 'ABC VESSEL',vesselname: 'ABC VESSEL',active: '',callsign: '',umappingcode: '',action: ''},
    {vesselcode: 'COPE',vesselname: 'EVER COPE',active: '',callsign: '',umappingcode: '',action: ''},
    {vesselcode: 'COPE',vesselname: 'EVER COPE',active: '',callsign: '',umappingcode: '',action: ''},
    {vesselcode: 'ABC VESSEL',vesselname: 'ABC VESSEL',active: '',callsign: '',umappingcode: '',action: ''},
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


  toggle(){
    this.isCollapsed = !this.isCollapsed;
  }
}
