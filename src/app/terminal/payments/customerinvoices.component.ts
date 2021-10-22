import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customerinvoices',
  templateUrl: './customerinvoices.component.html',
  styleUrls: ['./customerinvoices.component.scss']
})
export class CustomerinvoicesComponent implements OnInit {

  public isCollapsed: boolean = false;
  constructor( private modalService: NgbModal) {  }
  public billingCustoerInvoice :any[]= [{wono:'1001',repaircode:'',componentcode:'',damagecode:'',materialqty:'',repairqty:'',
servicetype:'',totalmaterial:'',totalmanhour:'',totalamount:''
},{wono:'1001',repaircode:'',componentcode:'',damagecode:'',materialqty:'',repairqty:'',
servicetype:'',totalmaterial:'',totalmanhour:'',totalamount:''
},
{wono:'1001',repaircode:'',componentcode:'',damagecode:'',materialqty:'',repairqty:'',
servicetype:'',totalmaterial:'',totalmanhour:'',totalamount:''
}];

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
