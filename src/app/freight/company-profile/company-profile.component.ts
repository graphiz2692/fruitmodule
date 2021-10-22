import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  constructor(public dialog: MatDialog ,private rt:Router) {}
  openDialog() {
    //     const dialogRef = this.dialog.open(StandardratesearchComponent);
     
    //     dialogRef.afterClosed().subscribe(result => {
    //       console.log(`Dialog result: ${result}`);
    //     });
      this.rt.navigate(['/freight/compnyBranch'])
    }

  ngOnInit(): void {
  }

}
