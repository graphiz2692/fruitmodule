import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingComponent } from './billing.component';
import {CustomerCashBillsComponent } from './customercashbills/customercashbills.component';
import { VendorunbilledjobsComponent } from './vendorunbilledjobs/vendorunbilledjobs.component';


const routes: Routes = [
  { path:"", redirectTo: 'billing', pathMatch: 'full' },
  { path:"", component: BillingComponent,
   children:[                  
              { path: 'customercashbills', component: CustomerCashBillsComponent },              
              { path: 'vendorunbilledjobs', component: VendorunbilledjobsComponent},              
            ],
            
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
