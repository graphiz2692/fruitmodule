import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InquiryComponent } from './inquiry/inquiry.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { BsliderComponent } from './bslider/bslider.component';
import { AppComponent } from './app.component';
import { TablesModule } from './components/tables/tables.module';
import {MatInputModule} from '@angular/material/input';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import  { MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

import {MatCheckboxModule} from '@angular/material/checkbox';
import {HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
 
]);
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    InquiryComponent,
    BsliderComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    FormsModule,MatDialogModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    SharedModule,
    CarouselModule,
    CommonModule,
    NgSelectModule,
    TablesModule,MatIconModule,
    MatInputModule,CdkAccordionModule,MatDatepickerModule,MatNativeDateModule,
    MatTableModule,MatCardModule,
    MatButtonModule,MatPaginatorModule
    ,FullCalendarModule,MatCheckboxModule,HttpClientModule,MatListModule,MatTabsModule,MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
