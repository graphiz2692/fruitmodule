import { Component, OnInit } from '@angular/core';
import { FreightServiceService } from '../freight-service.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-containermonitoring',
  templateUrl: './containermonitoring.component.html',
  styleUrls: ['./containermonitoring.component.scss']
})
export class ContainermonitoringComponent implements OnInit {

  constructor(private s1:FreightServiceService) { }

  ngOnInit(): void {
    this.s1.getContainerMonitoring().subscribe((d)=>this.data=d)
  }
   
     col:string[]=['REQUESTNO','ROTNO','ORDERNO','CONTAINERNO','SEALNO','TYPESIZE','TRAILER',
     'HAULIERNAME','REQDATETIME','CUSTOMER','SHIPPER']
data=new MatTableDataSource(ELEMENT_DATA)

}
var ELEMENT_DATA:ContainerMonitoring[]=[];
export interface ContainerMonitoring{
  REQUESTNO:number;
  ROTNO:number;
  ORDERNO:number;
  CONTAINERNO:number;
  SEALNO:number;
  TYPESIZE:number;
  TRILER:number;
  HOULIERNAME:number;
  REQDATETIME:string;
  CUSTOMER:string;
  SHIPPER:string;
}
