import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pendingpayments',
  templateUrl: './pendingpayments.component.html',
  styleUrls: ['./pendingpayments.component.scss']
})
export class PendingpaymentsComponent implements OnInit {

  public isCollapsed: boolean = false;
  constructor( private modalService: NgbModal) {  }
  
  public billingOrderdetails :any[]= 
  [{select:'001',orderno:'',bookingbillno:'',subbillno:'',bookingdate:'',bookingtype:'',_bookingtype:'',ordertype:'',agentcode:'',costomercode:'',
costomer:'',vesselscheduleid:'',vesselcode:'',vessel:'',voyageno:'',wharf:'',paymentterm:'',billedto:'',active:''},
{select:'002',orderno:'',bookingbillno:'',subbillno:'',bookingdate:'',bookingtype:'',_bookingtype:'',ordertype:'',agentcode:'',costomercode:'',
costomer:'',vesselscheduleid:'',vesselcode:'',vessel:'',voyageno:'',wharf:'',paymentterm:'',billedto:'',active:''}
];

public billingChargesdetails :any[]= 
  [{containerno:'',size:'',chargecode:'',movement:'',paymentterm:'',paymentto:'',
  price:'',qty:'',discount:'',totalamount:''},
  {containerno:'',size:'',chargecode:'',movement:'',paymentterm:'',paymentto:'',
  price:'',qty:'',discount:'',totalamount:''}

  ];
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
