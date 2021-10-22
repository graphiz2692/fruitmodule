import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  public isCollapsed: boolean = false;
  constructor(private modalService: NgbModal,) { }

  public dscustomerList :any[]= 
  [{customercode:'20210237',customername:'CMA',registrationno:'900-899-1112',billingcustomer:'',
  shipper:'',consignee:'',freightforwarder:'',shippingAgent:'',haulier:'',action:''},
  {customercode:'20210237',customername:'CMA',registrationno:'900-899-1112',billingcustomer:'',
  shipper:'',consignee:'',freightforwarder:'',shippingAgent:'',haulier:'',action:''},
  {customercode:'20210237',customername:'CMA',registrationno:'900-899-1112',billingcustomer:'',
  shipper:'',consignee:'',freightforwarder:'',shippingAgent:'',haulier:'',action:''}];

  ngOnInit(): void {
  }
  
  toggle(){
    this.isCollapsed = !this.isCollapsed;
  }

  LargeOpen1(largemodal1) {
    this.modalService.open(largemodal1, { size: 'lg' });
  }
  
  LargeOpen2(largemodal2) {
    this.modalService.open(largemodal2, { size: 'lg' });
  }

  LargeOpen3(largemodal3) {
    this.modalService.open(largemodal3, { size: 'sm' });
  }

}
