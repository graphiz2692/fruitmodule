import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreditnotelistsearchComponent } from "../creditnotelistsearch/creditnotelistsearch.component";

@Component({
  selector: 'app-creditnotelist',
  templateUrl: './creditnotelist.component.html',
  styleUrls: ['./creditnotelist.component.scss']
})
export class CreditnotelistComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CreditnotelistsearchComponent);
 
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
 }

  data=[
    { CREDITNOTENO:'', ORDERNO:'', CHARGECODE:'',INVOICENO:'',ACTION:''}
      ]
   
     col:string[]=['CREDITNOTENO','ORDERNO','CHARGECODE','INVOICENO','ACTION']

  ngOnInit(): void {
  }

}
