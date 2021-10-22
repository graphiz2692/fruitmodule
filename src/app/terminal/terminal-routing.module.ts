import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerminalComponent } from './terminal.component';
import { BookinginquiryComponent } from './inquiry/bookinginquiry.component';
import { GateinlistComponent } from './operations/gate/gateinlist.component';
import { TarifflistComponent } from './sales/customertariff/tarifflist.component';
import { StandardtariffComponent } from './sales/customertariff/standardtariff/standardtariff.component';
import { SlotbookingComponent } from './slotbooking/slotbooking.component';
import { TruckmonitoringComponent } from './operations/gate/truckmonitoring.component';
import { WorkorderptiComponent } from './workorderpti/workorderpti.component';
import { GateoutlistComponent } from './operations/gate/gateoutlist.component';
import { ContainermovementinquiryComponent } from './inquiry/containermovementinquiry.component';
import { JobCardComponent } from './job-card/job-card.component';
import { PendingInvoicesComponent } from './inquiry/pending-invoices/pending-invoices.component';
import { PendingpaymentsComponent } from './payments/pendingpayments.component';
import { SoalistComponent } from './payments/Soalist.component';
import { CashinvoicesComponent } from './payments/cashinvoices.component';
import { CustomerinvoicesComponent } from './payments/customerinvoices.component';

const routes: Routes = [

  { path:"", redirectTo: 'terminal', pathMatch: 'full' },
  { path:"", component: TerminalComponent,
   children:[
    {path:"bookinginquiry",component:BookinginquiryComponent},
    {path:"gatein",component:GateinlistComponent},
    {path:"gateout",component:GateoutlistComponent},
    {path:"tariff",component:TarifflistComponent},
    {path:"standardtariff",component:StandardtariffComponent},
    {path:"customtariff",component:TarifflistComponent},
    {path:"slotbooking",component:SlotbookingComponent},
    {path:"workorder",component:WorkorderptiComponent},
    {path:"truckmonitor",component:TruckmonitoringComponent},
    {path:"contaniermovmentInquiry",component:ContainermovementinquiryComponent},
    {path:"jobcard",component:JobCardComponent},
    {path:"pendinginvoices",component:PendingInvoicesComponent},
    {path:"pendingpayments",component:PendingpaymentsComponent},
    {path:"soalist",component:SoalistComponent},
    {path:"cashinvoices",component:CashinvoicesComponent},
    {path:"customerinvoices",component:CustomerinvoicesComponent},
    
    ],
},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminalRoutingModule { }
