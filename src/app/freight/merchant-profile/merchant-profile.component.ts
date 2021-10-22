import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SearchMarchantProfileComponent } from '../search-marchant-profile/search-marchant-profile.component';
@Component({
  selector: 'app-merchant-profile',
  templateUrl: './merchant-profile.component.html',
  styleUrls: ['./merchant-profile.component.scss']
})
export class MerchantProfileComponent implements OnInit {

  constructor(public dialog:MatDialog,public rt:Router) { }

  ngOnInit(): void {
  }
  col:any=['MERCHANTCODE','MERCHANTNAME','REGNO','GSTNO','id']
  data=[{MERCHANTCODE:89,MERCHANTNAME:'SATYAM',REGNO:90,GSTNO:90909,id:1}]

  openDialog(){
this.dialog.open(SearchMarchantProfileComponent)
  }
  funAdd(){
this.rt.navigate(['/freight/addmarchantProfile'])
  }
}
