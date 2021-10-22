import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterDataComponent } from './masterdata.component';
import { ChargesComponent } from './chargecode/charges.component';
import { CompanybranchComponent } from './company/companybranch.component';
import { ContainerstatuslistComponent } from './containerstatus/containerstatuslist.component';
import { CustomersComponent } from './customer/customers.component';
import { EquipmentlistComponent } from './equipment/equipmentlist.component';
import { LookuplistComponent } from './lookup/lookuplist.component';
import { MovementrulesComponent } from './movementrules/movementrules.component';
import { OrdertypesComponent } from './ordertype/ordertypes.component';
import { PortarealistComponent } from './portarea/portarealist.component';
import { ProcessrulesComponent } from './processrules/processrules.component';
import { SlotsComponent } from './slotmanagement/slots.component';
import { VesslesComponent } from './vessel/vessles.component';
import { ProcessmasterComponent } from './processmaster/processmaster.component';
import { TruckchargetermsComponent } from './truckchargeterms/truckchargeterms.component';
import { OrdertypeDetailsComponent } from './ordertype/ordertype-details.component';
import { BookingentryComponent } from './bookingentry/bookingentry.component';
import { ReapairLocationsComponent } from './reapair-locations/reapair-locations.component';

const routes: Routes = [
    { path:"", redirectTo: 'masterdata', pathMatch: 'full' },
    { path:"", component: MasterDataComponent,
     children:[
      { path: 'bookingentry', component: BookingentryComponent },
      { path: 'charges', component: ChargesComponent },
      { path: 'company', component: CompanybranchComponent },
      { path: 'containerStatus', component: ContainerstatuslistComponent },
      { path: 'customer', component: CustomersComponent },
      { path: 'equipment', component: EquipmentlistComponent },
      { path: 'lookup', component: LookuplistComponent },
      { path: 'movement', component: MovementrulesComponent  },
      { path: 'orderTypes', component: OrdertypesComponent  },
      { path: 'portal', component: PortarealistComponent  },
      { path: 'processRules', component: ProcessrulesComponent  },
      { path: 'slots', component: SlotsComponent  },
      { path: 'vessels', component: VesslesComponent },
      { path: 'process-master', component: ProcessmasterComponent },
      { path: 'truck-charges', component: TruckchargetermsComponent },
      { path: 'ordertype-details', component: OrdertypeDetailsComponent },
      { path: 'repairLocation', component: ReapairLocationsComponent },
             
      ]
  },
 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDataRoutingModule { }
