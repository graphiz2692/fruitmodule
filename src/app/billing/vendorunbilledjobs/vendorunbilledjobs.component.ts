import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vendorunbilledjobs',
  templateUrl: './vendorunbilledjobs.component.html',
  styleUrls: ['./vendorunbilledjobs.component.scss']
})
export class VendorunbilledjobsComponent implements OnInit {
  public isCollapsed: boolean = false;
  constructor( private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  toggle(){
    this.isCollapsed = !this.isCollapsed;
  }
  public billingpendingjobs: any[]=[
    {select:'',workorder:'',rivision:'',date:'',
  containerno:'', grade:'',customer:'',lessee:'',customeramount:'',lesseeamount:''},
    {select:'',workorder:'',rivision:'',date:'',
  containerno:'', grade:'',customer:'',lessee:'',customeramount:'',lesseeamount:''}];

  public billingChangesDetails: any[]=[
    {containerno:'001',repaircode:'',_containerno:'',size:'',
    eirno:'',responsibility:'', totalamount:''},
    {containerno:'002',repaircode:'',_containerno:'',size:'',
    eirno:'',responsibility:'', totalamount:''}];

}
