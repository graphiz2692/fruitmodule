import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersearchComponent } from "../usersearch/usersearch.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
   const dialogRef = this.dialog.open(UsersearchComponent);

   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
   });
}


  user = [
    {value: 'ACCOUNTS'},
    {value: 'ADMINISTRATION'},
    {value: 'MANAGERIAL'},
    {value: 'MANAGERIAL'},
    {value: 'TECHNICAL'}
  ];
  designtaion = [
    {value: 'CLERK'},
    {value: 'EXECUTIVE'},
    {value: 'MANAGER'},
    {value: 'OPERATOR'},
    {value: 'SYSTEM ADMINISTRATOR'},
  ]
  data=[
    { EMAILID:'', FULLNAME:'',DESIGNATION:'',USERTYPE:'',ACTION:''}
      ]
   
     col:string[]=['EMAILID', 'FULLNAME','DESIGNATION','USERTYPE','ACTION']

      
  ngOnInit(): void {
  }

}
