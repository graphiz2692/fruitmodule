import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { HoriFullLayoutComponent } from './shared/layouts-horizontal/hori-full-layout/hori-full-layout.component';
import { ContentLayoutComponent } from './shared/layouts/content-layout/content-layout.component';
import { ErrorLayoutComponent } from './shared/layouts/error-layout/error-layout.component';
import { FullLayoutComponent } from './shared/layouts/full-layout/full-layout.component';
import { MessageLayoutComponent } from './shared/layouts/message-layout/message-layout.component';
import { Content_Routes, Error_Routes, Message_Routes } from './shared/routes/content.routes';
import { Full_Content_Routes } from './shared/routes/full-content.routes';



import { MasterDataModule } from './masterdata/masterdata.module';

import { FreightModule } from './freight/freight.module';
import { TruckingModule } from './trucking/trucking.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthenticationComponent },
  { path: 'inquirypage', component: InquiryComponent },

  { path: '', component: HoriFullLayoutComponent, children: Full_Content_Routes },
  { path: '', component: ContentLayoutComponent, children: Content_Routes },
  { path: '', component: MessageLayoutComponent, children: Message_Routes },
  { path: '', component: ErrorLayoutComponent, children: Error_Routes },
 
 
 
  // { path: '**', redirectTo: 'login' },

  //  {
  //   path:'masterdata',
  //   loadChildren:()=>MasterDataModule
  // }

  { path: 'masterdata', loadChildren: () => import('./masterdata/masterdata.module').then(m => m.MasterDataModule) },
  { path: 'table', loadChildren: () => import('./masterdata/masterdata.module').then(m => m.MasterDataModule) },

  { path: 'freight', loadChildren: () => import('./freight/freight.module').then(m => m.FreightModule) },
  { path: 'trucking', loadChildren: () => import('./trucking/trucking.module').then(m => m.TruckingModule) },
  
  { path: 'yardmap', loadChildren: () => import('./yardmap/yardmapmodule.module').then(m => m.YardmapModuleModule) }
,  { path: 'advance', loadChildren: () => import('./components/advanced-ui/advanced-ui.module').then(m => m.AdvancedUiModule) }
,  { path: 'terminal', loadChildren: () => import('./terminal/terminal.module').then(m => m.TerminalModule) },
{ path: 'billing', loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule) }

];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
  })],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
