import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChassisMasterComponent } from './chassis-master/chassis-master.component';
import { TruckingComponent } from './trucking/trucking.component';

const routes: Routes = [
  { path:"", redirectTo: 'trucking', pathMatch: 'full' },
  {path:"",component:TruckingComponent,
  children:[
    { path: 'ChassisMaster', component:ChassisMasterComponent}
]
}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TruckingRoutingModule { }
