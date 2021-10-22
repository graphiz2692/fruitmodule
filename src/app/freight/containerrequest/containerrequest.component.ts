import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { FreightServiceService } from '../freight-service.service';
import {MatPaginator} from '@angular/material/paginator'

@Component({
  selector: 'app-containerrequest',
  templateUrl: './containerrequest.component.html',
  styleUrls: ['./containerrequest.component.scss']
})
export class ContainerrequestComponent implements OnInit,AfterViewInit {

  constructor(public dialog: MatDialog, private s1:FreightServiceService) {}

   openDialog() {
    const dialogRef = this.dialog.open(DashbordComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
 }

 
   col:string[]=['REQUESTNO','SHIPPINGAGENT','CONSIGNEE', 'HAULERNAME','id']

  ngOnInit(): void {
    this.s1.getContainerReq().subscribe((d)=>this.data=d)
  }
  data = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
   
  ngAfterViewInit() {
   // this.Data.paginator = this.paginator;
  }
}
var ELEMENT_DATA:containerRequest[]=[];

export interface containerRequest {
  id:number;
ACTION:string;
REQUESTNO:number;
SHIPPINGAGENT:number;
CONSIGNEE:string;
HAULERNAME:string;
}