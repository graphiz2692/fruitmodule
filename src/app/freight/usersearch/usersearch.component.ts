import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.scss']
})
export class UsersearchComponent implements OnInit {

  constructor() { }
  designtaion = [
    {value : 'CLERK'},
    {value: 'EXECUTIVE'},
    {value: 'MANAGER'},
    {value: 'OPERATOR'},
    {value: 'SYSTEM ADMINISTRATOR'},
  ]
  user = [
    {value: 'ACCOUNTS'},
    {value: 'ADMINISTRATION'},
    {value: 'MANAGERIAL'},
    {value: 'OPERATIONS'},
    {value: 'TECHNICAL'}
  ]
  branch = [
    {value: 'A S R C'}
  ]
  rols = [
    {value: 'ADMIN'}
  ]
  ngOnInit(): void {
  }

}
