import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarchantProfileAddressComponent } from '../marchant-profile-address/marchant-profile-address.component';

@Component({
  selector: 'app-add-marchant-profile',
  templateUrl: './add-marchant-profile.component.html',
  styleUrls: ['./add-marchant-profile.component.scss']
})
export class AddMarchantProfileComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns=['ACTIVE','BILL','OPR','PCK','TELNO','AREACODE','ADDRESS1','ADDRESS2','ID']
  dataSource=[{'ACTIVE':"yes",'BILL':"2300",'OPR':"dd",'PCK':"dd",'TELNO':"s",'AREACODE':"d",'ADDRESS1':"d",'ADDRESS2':"D",'ID':"1"}]
  add(){
this.dialog.open(MarchantProfileAddressComponent,{width:'400px'})
  }
}
