import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BillingComponent } from './billing.component';
import { BillingRoutingModule } from './billing-routing.module';
import {CustomerCashBillsComponent } from './customercashbills/customercashbills.component';
import { VendorpaymentComponent } from './vendorpayment/vendorpayment.component';
import { VendorunbilledjobsComponent } from './vendorunbilledjobs/vendorunbilledjobs.component';

@NgModule({
  declarations: [
    BillingComponent,
    CustomerCashBillsComponent,        
    VendorpaymentComponent,
    VendorunbilledjobsComponent,
    ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    CommonModule,
    NgxDatatableModule,
    NgSelectModule,
    SharedModule
  ]
})
export class BillingModule { }
