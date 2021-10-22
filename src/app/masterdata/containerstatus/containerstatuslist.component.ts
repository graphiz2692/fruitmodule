import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-containerstatuslist',
  templateUrl: './containerstatuslist.component.html',
  styleUrls: ['./containerstatuslist.component.scss']
})
export class ContainerstatuslistComponent implements OnInit {

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

  
  public mdContainerStatus = [
    {code: '56',description: 'FIFTY SIX',holdstatus: '',active: '',action: ''},
    {code: 'AV',description: 'AVAILABLE',holdstatus: '',active: '',action: ''},
    {code: 'AV',description: 'AVAILABLE',holdstatus: '',active: '',action: ''},
    {code: '56',description: 'FIFTY SIX',holdstatus: '',active: '',action: ''},       
  ];

}
