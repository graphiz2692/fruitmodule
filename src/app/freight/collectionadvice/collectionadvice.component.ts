import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import  { AdvicesearchComponent } from '../advicesearch/advicesearch.component';
import { AdvicetableComponent } from '../advicetable/advicetable.component';
import {MatTableDataSource} from '@angular/material/table'
import { FreightServiceService } from '../freight-service.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-collectionadvice',
  templateUrl: './collectionadvice.component.html',
  styleUrls: ['./collectionadvice.component.scss']
})
export class CollectionadviceComponent implements OnInit ,AfterViewInit{

  constructor(public dialog: MatDialog, private s1:FreightServiceService) {}

  openDialog() {
   const dialogRef = this.dialog.open(AdvicesearchComponent);

   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
   });
}

openDialog2() {
  const dialogRef = this.dialog.open(AdvicetableComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

  ngOnInit(): void {
    this.s1.getCollectionAdvice().subscribe((d)=>this.data=d)
  }
    col:string[]=['SELECT','NEW','CLOSING','REQDATETIME','CONTAINERNO','TYPESIZE','JOBNO','CUSTOMERNAME','PICKUPFROM']

data=new MatTableDataSource(COLLECTIONADVICE_DATA)
@ViewChild(MatPaginator) paginator: MatPaginator;
   
     ngAfterViewInit() {
       this.data.paginator = this.paginator;
     }
}
var COLLECTIONADVICE_DATA:collectionadvice[]
export interface collectionadvice{
  SELECT:string;
  NEW:string;
  CLOSING:string;
  REQDATETIME:string;
  CONTAINERNO:number;
  TYPESIZE:number;
  JOBNO:number;
  CUSTOMERNAME:string;
  PICKUPFROM:string;
}
