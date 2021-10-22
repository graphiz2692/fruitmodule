import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YardblockComponent } from './yardblock/yardblock.component';
import { YardmapComponent } from './yardmap/yardmap.component';
import { YardpropertiesComponent } from './yardproperties/yardproperties.component';
import { YardsummaryComponent } from './yardsummary/yardsummary.component';
// import { MasterDataRoutingModule } from 'src/app/masterdata/masterdata-routing.module';
import { YardmapModuleRoutingModule } from './yardmap-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppComponent } from 'src/app/app.component';
import { YardmapmoduleComponent } from './yardmapmodule.component';
import { AccordionComponent } from 'src/app/components/advanced-ui/accordion/accordion.component';
 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ YardblockComponent,YardmapComponent, YardpropertiesComponent, YardsummaryComponent, YardmapmoduleComponent],
  imports: [
    CommonModule,
    NgbModule,
    YardmapModuleRoutingModule,
    NgSelectModule,
    SharedModule
    
  ],
  providers: [],
bootstrap: [AppComponent],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class YardmapModuleModule { }
