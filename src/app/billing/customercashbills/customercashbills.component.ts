import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-charges',
  templateUrl: './customercashbills.component.html',
  styleUrls: ['./customercashbills.component.scss']
})
export class CustomerCashBillsComponent implements OnInit {
  public isCollapsed: boolean = false;
  constructor( private modalService: NgbModal) {  }
  public billingCustomerCashBill :any[]= [
    {invoiceno: '100001',invoicedate: '',customername: '', action: ''},
    {invoiceno: '100002',invoicedate: '',customername: '', action: ''},
    {invoiceno: '100003',invoicedate: '',customername: '', action: ''},
    {invoiceno: '100004',invoicedate: '',customername: '', action: ''},
    {invoiceno: '100005',invoicedate: '',customername: '', action: ''},
  ];  

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
    this.modalService.open(largemodal3, { size: 'lg' });
  }
 
}

	

  