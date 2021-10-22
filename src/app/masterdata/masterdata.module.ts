import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDataRoutingModule } from './masterdata-routing.module';
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
import { AppComponent } from '../app.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../shared/shared.module';
import { ProcessmasterComponent } from './processmaster/processmaster.component';
import { TruckchargetermsComponent } from './truckchargeterms/truckchargeterms.component';
import { OrdertypeDetailsComponent } from './ordertype/ordertype-details.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BookingentryComponent } from './bookingentry/bookingentry.component';
import { ReapairLocationsComponent } from './reapair-locations/reapair-locations.component';
 
@NgModule({
  declarations: [
    MasterDataComponent,
    ChargesComponent,
    CompanybranchComponent,
    ContainerstatuslistComponent,
    CustomersComponent,
    EquipmentlistComponent,
    LookuplistComponent,
    MovementrulesComponent,
    OrdertypesComponent,
    PortarealistComponent,
    ProcessrulesComponent,
    SlotsComponent,
    VesslesComponent,
    ProcessmasterComponent,
    TruckchargetermsComponent,
    OrdertypeDetailsComponent,
    BookingentryComponent,
    ReapairLocationsComponent
  ],
  imports: [
    CommonModule,
    MasterDataRoutingModule,
    NgSelectModule,
    SharedModule,
    NgxDatatableModule
],
providers: [],
bootstrap: [AppComponent],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MasterDataModule { }
