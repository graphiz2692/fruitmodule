import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './terminal.component';
import { TerminalRoutingModule } from './terminal-routing.module';
import { BookinginquiryComponent } from './inquiry/bookinginquiry.component';
import { ContainermovementinquiryComponent } from './inquiry/containermovementinquiry.component';
import { VesselschedulesComponent } from './operations/vesselschedule/vesselschedules.component';
import { CashinvoicesComponent } from './payments/cashinvoices.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { GateinlistComponent } from './operations/gate/gateinlist.component';
import { GateoutlistComponent } from './operations/gate/gateoutlist.component';
import { TarifflistComponent } from './sales/customertariff/tarifflist.component';
import { StandardtariffComponent } from './sales/customertariff/standardtariff/standardtariff.component';
import { SlotbookingComponent } from './slotbooking/slotbooking.component';
import { TruckmonitoringComponent } from './operations/gate/truckmonitoring.component';
import { WorkorderptiComponent } from './workorderpti/workorderpti.component';
import { JobCardComponent } from './job-card/job-card.component';
import { PendingInvoicesComponent } from './inquiry/pending-invoices/pending-invoices.component';
import { PendingpaymentsComponent } from './payments/pendingpayments.component';
import { SoalistComponent } from './payments/Soalist.component';
import { CustomerinvoicesComponent } from './payments/customerinvoices.component';


@NgModule({
  declarations: [
    TerminalComponent,
    BookinginquiryComponent,
    ContainermovementinquiryComponent,
    VesselschedulesComponent,GateinlistComponent,GateoutlistComponent,TarifflistComponent,
    CashinvoicesComponent,
    StandardtariffComponent,
    SlotbookingComponent,
    TruckmonitoringComponent,
    WorkorderptiComponent,   
    JobCardComponent,   
    PendingInvoicesComponent,
    SoalistComponent,
    CustomerinvoicesComponent,
    PendingpaymentsComponent],
    
  imports: [
    CommonModule,
    TerminalRoutingModule,
    CommonModule,
    NgxDatatableModule,
    NgSelectModule,
    SharedModule
  ]
})
export class TerminalModule { }
