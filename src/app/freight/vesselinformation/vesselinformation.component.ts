import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FreightServiceService } from '../freight-service.service';
import { VesselInformation } from '../vessel-information';
import { VesselprofilesearchComponent } from "../vesselprofilesearch/vesselprofilesearch.component";

@Component({
  selector: 'app-vesselinformation',
  templateUrl: './vesselinformation.component.html',
  styleUrls: ['./vesselinformation.component.scss']
})
export class VesselinformationComponent implements OnInit {


  constructor(public dialog: MatDialog,private s1:FreightServiceService) {}

  openDialog() {
   const dialogRef = this.dialog.open(VesselprofilesearchComponent);

   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
   });
}

     col:string[]=['id','VESSELID','VESSELNAME','VESSELTYPE', 'CALLSIGNNO', ]


  ngOnInit(): void {
    this.s1.getVesselDetails().subscribe((d)=>this.data=d)
  }
data=new MatTableDataSource(Vesselinformation_Details)



}
var Vesselinformation_Details:VesselInformation[]
export interface vesselinformation{
 
  ACTION:number;
  VESSELID:string;
  VESSELNAME:string;
  VESSELTYPE:string;
  CALLSIGNNO:string;
}