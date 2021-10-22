import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StandardProfileAddComponent } from '../standard-profile-add/standard-profile-add.component';

@Component({
  selector: 'app-standardratesearch',
  templateUrl: './standardratesearch.component.html',
  styleUrls: ['./standardratesearch.component.scss']
})
export class StandardratesearchComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  data=[
    {ACTION: 3,JOB:'MENTON',SHIPMENTTYPE:'SHIP',JOBCATEGORY:'CATEO',DESCRIPTION: 'DETILS', TYPESIZE:'SIZE', CURR:'CURR', SELLRATE:'', ESTCOST:'',MINAMT:'',MAXAMT:'',SLAB:''}
      ]
   
     col:string[]=['ACTION','JOB','SHIPMENTTYPE','JOBCATEGORY', 'DESCRIPTION', 'TYPESIZE', 'CURR', 'SELLRATE', 'ESTCOST', 'MINAMT', 'MAXAMT', 'SLAB']

  ngOnInit(): void {
  }
  openDialog(){
this.dialog.open(StandardProfileAddComponent)
  }
}
