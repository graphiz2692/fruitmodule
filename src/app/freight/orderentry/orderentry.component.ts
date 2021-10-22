import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OderadvanceserchComponent } from "../oderadvanceserch/oderadvanceserch.component";
import { FreightServiceService } from '../freight-service.service';
import {MatTableDataSource} from '@angular/material/table';
import {Router } from  '@angular/router';
@Component({
  selector: 'app-orderentry',
  templateUrl: './orderentry.component.html',
  styleUrls: ['./orderentry.component.scss']
})
export class OrderentryComponent implements OnInit {


  constructor(public dialog: MatDialog, private s1:FreightServiceService, private rt: Router) {}

  openDialog() {
   const dialogRef = this.dialog.open(OderadvanceserchComponent);

   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
   });
}

openDialog2() {
 this.rt.navigate(['/freight/orderentryadd'])
 
}
     col:string[]=['ORDERNO','VOYAGENO','VESSELNAME','CUSTOMERNAME', 'AGENTNAME', 'CREATEDBY', 'STATUS', 'id']

  ngOnInit(): void {
    this.s1.getOrderEntry().subscribe((d)=>this.data=d)
  }
  data=new MatTableDataSource(orderEntryData)

}
var orderEntryData:orderentry[]
export interface orderentry{
  id:number;
  ORDERNO:number;
  VOYAGENO:number;
  VESSELNAME:string;
  CUSTOMERNAME:string;
  AGENTNAME:string;
   CREATEDBY:string;
    STATUS:string;
     ACTION:string;
}
