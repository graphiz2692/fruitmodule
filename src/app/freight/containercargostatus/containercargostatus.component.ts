import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-containercargostatus',
  templateUrl: './containercargostatus.component.html',
  styleUrls: ['./containercargostatus.component.scss']
})
export class ContainercargostatusComponent implements OnInit {

  constructor() { }
  booking = [
    {value: 'EXPORT'},
    {value: 'IMPORT'},
    {value: 'LOCAL'},
    {value: 'TRANSPERNT'}
  ];
  data=[
    { TYPE:'', CONTAINERKEY:'',DOCUMENTNO:'',DATE:'',TIME:'',TRUCKID:'',TRUCKREGNO:'',DRIVERNAME:'',CONTRACTOR:'',LOCATION:'',REMARKS:''}
      ]
   
     col:string[]=['TYPE', 'CONTAINERKEY','DOCUMENTNO','DATE','TRUCKID','TIME','TRUCKREGNO','DRIVERNAME','CONTRACTOR','LOCATION','REMARKS']


  ngOnInit(): void {
  }

}
