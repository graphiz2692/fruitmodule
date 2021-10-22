import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companybranchdetails',
  templateUrl: './companybranchdetails.component.html',
  styleUrls: ['./companybranchdetails.component.scss']
})
export class CompanybranchdetailsComponent implements OnInit {

  constructor(public dialog: MatDialog ,private rt:Router) {}
  
  openDialog() {
    //     const dialogRef = this.dialog.open(StandardratesearchComponent);
     
    //     dialogRef.afterClosed().subscribe(result => {
    //       console.log(`Dialog result: ${result}`);
    //     });
      this.rt.navigate(['/freight/companyProfile'])
    }

  ngOnInit(): void {
  }
  country = [
    {value: 'AD - ANDORRA'},
    {value: 'AF - AFGHANISTAN'},
    {value: 'AG - ANTIGUA AND BARBUDA'},
    {value: 'IN - INDIA'},
    {value: 'IQ - IRAQ'},
    {value: 'KH - CAMBODIA'}
  ];

}
