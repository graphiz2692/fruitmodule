import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RollsearchComponent } from "../rollsearch/rollsearch.component";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
   const dialogRef = this.dialog.open(RollsearchComponent);

   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
   });
}

  data=[
    { ROLECODE:'', ROLEDESCRIPTION:'',ACTION:''}
      ]
   
     col:string[]=['ROLECODE', 'ROLEDESCRIPTION','ACTION']

  ngOnInit(): void {
  }

}
