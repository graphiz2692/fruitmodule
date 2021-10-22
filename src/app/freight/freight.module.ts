import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreightComponent } from './freight/freight.component';
import { ContainerrequestComponent } from './containerrequest/containerrequest.component';
import { ContainermonitoringComponent } from './containermonitoring/containermonitoring.component';
import { CollectionadviceComponent } from './collectionadvice/collectionadvice.component';
import { FreightRoutingModule } from './freight-routing.module';
import { AppComponent } from '../app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatInputModule} from '@angular/material/input';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import  { MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {DashbordComponent} from './dashbord/dashbord.component';
import {AdvicesearchComponent } from './advicesearch/advicesearch.component';
import { AdvicetableComponent } from './advicetable/advicetable.component';
import { OrderentryComponent } from './orderentry/orderentry.component';
import { VesselinformationComponent } from './vesselinformation/vesselinformation.component';
import { VesselscheduleComponent } from './vesselschedule/vesselschedule.component';
import { OderadvanceserchComponent } from './oderadvanceserch/oderadvanceserch.component';

import { VesselprofilesearchComponent } from './vesselprofilesearch/vesselprofilesearch.component';
import { VesselAdvSearchComponent } from './vessel-adv-search/vessel-adv-search.component'
import {MatPaginatorModule} from '@angular/material/paginator';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins

import dayGridPlugin from '@fullcalendar/daygrid';// a plugin!
import { StandardrateprofileComponent } from './standardrateprofile/standardrateprofile.component';
import { StandardratesearchComponent } from './standardratesearch/standardratesearch.component';
import { MerchntquotationComponent } from './merchntquotation/merchntquotation.component';
import { MerchantquotationsearchComponent } from './merchantquotationsearch/merchantquotationsearch.component';
import { VendorquotationComponent } from './vendorquotation/vendorquotation.component';
import { VendorquotaionsearchComponent } from './vendorquotaionsearch/vendorquotaionsearch.component';
import { CostsheetlistComponent } from './costsheetlist/costsheetlist.component';
import { CostsheetComponent } from './costsheet/costsheet.component';
import { UnbilledorderslistComponent } from './unbilledorderslist/unbilledorders.component';
import { UnbilledodersComponent } from './unbilledoders/unbilledoders.component';
import { InvoicelistComponent } from './invoicelist/invoicelist.component';
import { CashbilllistComponent } from './cashbilllist/cashbilllist.component';
import { CreditnotelistComponent } from './creditnotelist/creditnotelist.component';
import { CreditnotelistsearchComponent } from './creditnotelistsearch/creditnotelistsearch.component';





import {HttpClientModule} from '@angular/common/http';
import { EditContainerRequestComponent } from './edit-container-request/edit-container-request.component';
import { EditVesselDetailsComponent } from './edit-vessel-details/edit-vessel-details.component';
import { EditOrderEntryComponent } from './edit-order-entry/edit-order-entry.component';
import { StatutoryreportsComponent } from './statutoryreports/statutoryreports.component';

import {MatListModule} from '@angular/material/list';
import { OperationalreportsComponent } from './operationalreports/operationalreports.component';
import { ManagementreportsComponent } from './managementreports/managementreports.component';
import { OrderinquiryComponent } from './orderinquiry/orderinquiry.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { MerchantProfileComponent } from './merchant-profile/merchant-profile.component';
import { StandardProfileAddComponent } from './standard-profile-add/standard-profile-add.component';
import { AddMerchantQuotationComponent } from './add-merchant-quotation/add-merchant-quotation.component';
import { AddVenderQuotationComponent } from './add-vender-quotation/add-vender-quotation.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { OutstandingmovementsComponent } from './outstandingmovements/outstandingmovements.component';
import { BookinginquiryComponent } from './bookinginquiry/bookinginquiry.component';
import { ContainercargostatusComponent } from './containercargostatus/containercargostatus.component';
import { RolesComponent } from './roles/roles.component';
import { RollsearchComponent } from './rollsearch/rollsearch.component';
import { UsersComponent } from './users/users.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { CompanybranchdetailsComponent } from './companybranchdetails/companybranchdetails.component';
import { AddMarchantProfileComponent } from './add-marchant-profile/add-marchant-profile.component';
import { SearchMarchantProfileComponent } from './search-marchant-profile/search-marchant-profile.component';
import {MatTabsModule} from '@angular/material/tabs';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MarchantProfileAddressComponent } from './marchant-profile-address/marchant-profile-address.component';
import { OrderentryaddComponent } from './orderentryadd/orderentryadd.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
 
]);

@NgModule({
  declarations: [FreightComponent, ContainerrequestComponent, ContainermonitoringComponent, CollectionadviceComponent,
  DashbordComponent,
  AdvicesearchComponent,
  AdvicetableComponent,
  OrderentryComponent,
  VesselinformationComponent,
  VesselscheduleComponent,
  OderadvanceserchComponent,

  VesselprofilesearchComponent,
  VesselAdvSearchComponent,

  StandardrateprofileComponent,
  StandardratesearchComponent,
  MerchntquotationComponent,
  MerchantquotationsearchComponent,
  VendorquotationComponent,
  VendorquotaionsearchComponent,
  CostsheetlistComponent,
  CostsheetComponent,
  UnbilledorderslistComponent,
  UnbilledodersComponent,
  InvoicelistComponent,
  CashbilllistComponent,
  CreditnotelistComponent,
  CreditnotelistsearchComponent,



 

  EditContainerRequestComponent,
  EditVesselDetailsComponent,
  EditOrderEntryComponent,
  StatutoryreportsComponent,
  OperationalreportsComponent,
  ManagementreportsComponent,
  OrderinquiryComponent,
  CompanyProfileComponent,
  MerchantProfileComponent,
  StandardProfileAddComponent,
  AddMerchantQuotationComponent,
  AddVenderQuotationComponent,
  OutstandingmovementsComponent,
  BookinginquiryComponent,
  ContainercargostatusComponent,
  RolesComponent,
  RollsearchComponent,
  UsersComponent,
  UsersearchComponent,
  CompanybranchdetailsComponent,  AddMarchantProfileComponent,
  SearchMarchantProfileComponent,
  MarchantProfileAddressComponent,
  OrderentryaddComponent

  ],
  imports: [
    CommonModule,
    FreightRoutingModule,
    NgxDatatableModule, 
    NgSelectModule,
    MatTableModule,MatCardModule,MatButtonModule,MatIconModule,MatListModule,
    SharedModule,MatInputModule,CdkAccordionModule,FormsModule,ReactiveFormsModule,MatDatepickerModule,MatNativeDateModule,
    MatDialogModule,MatSelectModule,MatPaginatorModule,FullCalendarModule,HttpClientModule,MatCheckboxModule,MatTabsModule
    ,MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FreightModule { }
