import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YardmapComponent } from './yardmap/yardmap.component';

// import { ChargesComponent } from './chargecode/charges.component';



const routes: Routes = [
    { path:"", redirectTo: 'yardmap', pathMatch: 'full' },
    { path:"", component: YardmapComponent,
     children:[
   { path: 'yardmap', component: YardmapComponent }
      ]
  },
 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  YardmapModuleRoutingModule { }
