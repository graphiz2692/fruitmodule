import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unbilledoders',
  templateUrl: './unbilledoders.component.html',
  styleUrls: ['./unbilledoders.component.scss']
})
export class UnbilledodersComponent implements OnInit {

  constructor() { }

  filtered = [
    {value: 'IMPORT'},
    {value: 'EXPORT'},
    {value: 'LOCAL'},
    {value: 'TRANSPERNT'}
  ];
  catogery = [
    {value: '1230'},
    {value: 'EPORT'},
    {value: 'MY EXPORT'},
    {value: 'MYJOB1'},
    {value: 'MYPORTEXP'},
    {value: 'PORTIMP'},
    {value: 'SEA-IMP-OE'},

  ]
  charge =[
    {value: 'ORD-CM - ORDER'},
    {value: 'CNT-CM - CONTAINER'},
  ]
  module=[
    {value: 'HAULAGE'},
    {value: 'DEPOT'},
    {value: 'WAREHOUSE'},
    {value: 'TRANSPORT'},
    {value: 'FREIGHT'},
    {value: 'MANIFEST'},
    {value: '1STATS'},
    {value: 'CFS'},
    {value: 'DECLARATION'},
    {value: 'PORT'},
    {value: 'SALES'},
    {value: 'BILLING'},
  ]
  moment = [
    {value: 'moment'},
    
  ]
  crdit = [
    {value: 'crdit'},
  ]
  zone = [
    {value: 'zone'},
  ]

  data=[
    { ALERT:'', ORDERNO:'',ORDERDATE:'',JOB:'',SHP:'',JOBCATEGORY:'',TRANSPORTTYPE:'',CUSTOMERNAME:'',PICKUPFROM:'',DELIVERTO:'',ZONE:'',AREANAME:'',}
      ]
   
     col:string[]=['ALERT', 'ORDERNO','ORDERDATE','JOB','SHP','JOBCATEGORY','TRANSPORTTYPE','CUSTOMERNAME','PICKUPFROM','DELIVERTO','ZONE','AREANAME',]



     dataSource=[
      { CONTAINERNO:'', SIZE:'',PACKAGE:'',CODE:'',DESCRIPTION:'',UNIT:'',QUANTITY:'',PRICE:'',ESTSELL:'',ACTSELL:'',BALANCE:'',INT:'',ZONE:'',AREANAME:'',CONTAINERREF:''}
        ]
     
        displayedColumns:string[]=['CONTAINERNO', 'SIZE','PACKAGE','CODE','DESCRIPTION','UNIT','QUANTITY','PRICE','ESTSELL','ACTSELL','BALANCE','INT','ZONE','AREANAME','CONTAINERREF']
  
  
  ngOnInit(): void {
  }

}
