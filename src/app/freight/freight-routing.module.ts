import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CollectionadviceComponent } from "./collectionadvice/collectionadvice.component";
import { ContainermonitoringComponent } from "./containermonitoring/containermonitoring.component";
import { ContainerrequestComponent } from "./containerrequest/containerrequest.component";
import { EditContainerRequestComponent } from "./edit-container-request/edit-container-request.component";
import { EditOrderEntryComponent } from "./edit-order-entry/edit-order-entry.component";
import { EditVesselDetailsComponent } from "./edit-vessel-details/edit-vessel-details.component";
import { FreightComponent } from "./freight/freight.component";
import { OrderentryComponent } from "./orderentry/orderentry.component";
import { VesselinformationComponent } from "./vesselinformation/vesselinformation.component";
import { VesselscheduleComponent } from "./vesselschedule/vesselschedule.component"; 
import { StandardrateprofileComponent } from './standardrateprofile/standardrateprofile.component';
import { MerchntquotationComponent } from './merchntquotation/merchntquotation.component';
import { VendorquotationComponent } from './vendorquotation/vendorquotation.component';
import {  CostsheetlistComponent } from './costsheetlist/costsheetlist.component';
import { CostsheetComponent } from './costsheet/costsheet.component';
import { UnbilledorderslistComponent } from './unbilledorderslist/unbilledorders.component';
import { UnbilledodersComponent } from './unbilledoders/unbilledoders.component';
import { InvoicelistComponent } from './invoicelist/invoicelist.component';
import { CashbilllistComponent } from './cashbilllist/cashbilllist.component';
import { CreditnotelistComponent} from './creditnotelist/creditnotelist.component';
import { StatutoryreportsComponent } from './statutoryreports/statutoryreports.component';
import { OperationalreportsComponent } from './operationalreports/operationalreports.component';
import {ManagementreportsComponent } from './managementreports/managementreports.component';
import {OrderinquiryComponent } from './orderinquiry/orderinquiry.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { MerchantProfileComponent } from './merchant-profile/merchant-profile.component';
import { StandardratesearchComponent } from "./standardratesearch/standardratesearch.component";
import { MerchantquotationsearchComponent } from "./merchantquotationsearch/merchantquotationsearch.component";
import { VendorquotaionsearchComponent } from './vendorquotaionsearch/vendorquotaionsearch.component';
import { OutstandingmovementsComponent } from "./outstandingmovements/outstandingmovements.component";
import { BookinginquiryComponent } from './bookinginquiry/bookinginquiry.component';
import { ContainercargostatusComponent } from "./containercargostatus/containercargostatus.component";
import { RolesComponent } from "./roles/roles.component";
import { UsersComponent} from './users/users.component';
import { CompanybranchdetailsComponent } from './companybranchdetails/companybranchdetails.component';
import { AddMarchantProfileComponent } from './add-marchant-profile/add-marchant-profile.component';
import { CreditnotelistsearchComponent } from "./creditnotelistsearch/creditnotelistsearch.component";
import { OrderentryaddComponent} from './orderentryadd/orderentryadd.component';
const routes: Routes = [

    { path:"", redirectTo: 'freight', pathMatch: 'full' },
    { path:"", component:FreightComponent,
     children:[
      { path: 'collectionadvice', component:CollectionadviceComponent },
      { path: 'containermonitoring', component: ContainermonitoringComponent },
      { path: 'containerrequest', component: ContainerrequestComponent },
      { path: 'orderentry' , component:OrderentryComponent},
      { path: 'vesselinformation', component:VesselinformationComponent},

      { path: 'vesselschedule', component:VesselscheduleComponent },
      { path: 'standardrateprofile' , component:StandardrateprofileComponent},
      { path: 'merchantquotation', component:MerchntquotationComponent },
      { path: 'vendorquotation', component:VendorquotationComponent },
      { path: 'costsheetlist', component:CostsheetlistComponent },
      { path: 'costsheet' , component: CostsheetComponent},
      { path: 'unbilledorderslist', component: UnbilledorderslistComponent },
      { path: 'unbilledorders',component:UnbilledodersComponent },
      { path: 'invoicelist', component: InvoicelistComponent },
      { path: 'cashbilllist', component: CashbilllistComponent},
      { path: 'creditnotelist', component:CreditnotelistComponent },
      

      { path: 'vesselschedule', component:VesselscheduleComponent},
      {path:'editContainerRequest/:id',component:EditContainerRequestComponent},
      {path:'editVesselDetails/:id',component:EditVesselDetailsComponent},
      {path:'editOrderEntry/:id',component:EditOrderEntryComponent},
      {path: 'statoryreports', component: StatutoryreportsComponent},
      {path: 'operationalreports' ,component:OperationalreportsComponent },
      {path: 'managementreports' , component: ManagementreportsComponent},
      {path: 'orderinquiry', component:OrderinquiryComponent },
      {path:'companyProfile',component:CompanyProfileComponent},
      {path:'merchantProfile',component:MerchantProfileComponent},
      {path:'standardProfileSearch',component:StandardratesearchComponent},
      {path:'merchantQuotationSearch',component:MerchantquotationsearchComponent},
      {path:'venderQuotationSearch',component:VendorquotaionsearchComponent},

      {path: 'oustanding', component:OutstandingmovementsComponent },
      {path: 'bookinginquiry', component:BookinginquiryComponent},
      {path: 'containercargo', component:ContainercargostatusComponent},
      {path: 'rols' , component:RolesComponent},
      {path: 'user', component:UsersComponent},
      {path: 'compnyBranch', component: CompanybranchdetailsComponent },
      {path:'addmarchantProfile',component:AddMarchantProfileComponent},
      {path:'CreditnotelistsearchComponent',component:CreditnotelistsearchComponent},
      {path: 'orderentryadd' , component:OrderentryaddComponent}
    ]
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class FreightRoutingModule {}
