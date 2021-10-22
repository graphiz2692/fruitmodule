import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StandardratesearchComponent } from "../standardratesearch/standardratesearch.component";

@Component({
  selector: 'app-standardrateprofile',
  templateUrl: './standardrateprofile.component.html',
  styleUrls: ['./standardrateprofile.component.scss']
})
export class StandardrateprofileComponent implements OnInit {

  constructor(public dialog: MatDialog ,private rt:Router) {}

  openDialog() {
//     const dialogRef = this.dialog.open(StandardratesearchComponent);
 
//     dialogRef.afterClosed().subscribe(result => {
//       console.log(`Dialog result: ${result}`);
//     });
  this.rt.navigate(['/freight/standardProfileSearch'])
}
 

  data=[
    {ACTION:31,QUOTATIONNO:'SQHQ210800001',QUOTEDDATE:'8/13/2021',EFFECTIVE:'8/13/2021',EXPIRY: '8/31/2023', PREPAREDBY:'ASRC@GMAIL.COM', APPROVEDBY:'ASRC@GMAIL.COM', CANCELEDBY:''}
      ]
   
     col:string[]=['ACTION','QUOTATIONNO','QUOTEDDATE','EFFECTIVE', 'EXPIRY', 'PREPAREDBY', 'APPROVEDBY', 'CANCELEDBY']

  ngOnInit(): void {
  }

}
