import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChassisDetailsComponent } from '../chassis-details/chassis-details.component';

@Component({
  selector: 'app-chassis-master',
  templateUrl: './chassis-master.component.html',
  styleUrls: ['./chassis-master.component.scss']
})
export class ChassisMasterComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(ChassisDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }
  col:string[]=["CHASSISNO","REGNO","MODALNO","HEIGHT","TYPE","BRANCH","OWNER","ROADTAXEXPIRY",
  "INSEXPIRY","INSPECTION","STATUS","ACTION"]

  data=[
  {CHASSISNO:"EOO1",REGNO:"72642",MODALNO:"",SIZE:"20",HEIGHT:"1.5",TYPE:"TYPE1",BRANCH:"SCT1"
  ,OWNER:"OWN",ROADTAXEXPIRY:"13/06/2014",INSEXPIRY:"13/06/2014",INSPECTION:"13/06/2014",
  STATUS:"SENTTOAGENT",ACTION:"S"}
  ]
}
