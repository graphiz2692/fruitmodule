import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TruckingRoutingModule } from './trucking-routing.module';
import { TruckingComponent } from './trucking/trucking.component';
import { ChassisMasterComponent } from './chassis-master/chassis-master.component';
import { ChassisDetailsComponent } from './chassis-details/chassis-details.component';
import { AppComponent } from '../app.component';
import {MatCardModule} from '@angular/material/card';
import{MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [TruckingComponent, ChassisMasterComponent, ChassisDetailsComponent],
  imports: [
    CommonModule,SharedModule,NgSelectModule,NgxDatatableModule,
    TruckingRoutingModule,MatCardModule,MatButtonModule,MatTableModule
    ,MatPaginatorModule,FormsModule,ReactiveFormsModule,MatDatepickerModule,MatInputModule,MatSelectModule
    ,MatIconModule,MatCheckboxModule
    ,MatDialogModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TruckingModule { }
