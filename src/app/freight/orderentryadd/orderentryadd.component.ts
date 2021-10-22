import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderentryadd',
  templateUrl: './orderentryadd.component.html',
  styleUrls: ['./orderentryadd.component.scss']
})
export class OrderentryaddComponent implements OnInit {

  constructor() { }
  transport = [
    {value: 'AIR'},
    {value: 'FIX TRANSPORT INSTALLATION'},
    {value: 'POST'},
    {value: 'RAIL'},
    {value: 'RAIL' },
    {value: 'SEA'}

  ];
  shipment = [
    {value: 'CONVENTIONAL CARGO'},
    {value: 'EMPTY'},
    {value: 'FCL'},
    {value: 'LCL'}
  ]
  job = [
    {value: 'EXPORT'},
    {value: 'IMPORT'},
    {value: 'LOCAL'},
    {value: 'TRANSHIPMENT'}
  ]
  catogery = [
    {value: 'ORDER CATEGORY'}
  ]
  inco = [
    {value: 'DAF (DELIVERED AT FRONTIER)'},
    {value: 'DDU (DELIVERED DUTY UNPAID)'},
    {value: 'DELIVERED AT PLACE …NAMED PORT OF DESTINATION'},
    {value: 'DELIVERED AT TERMINAL... NAMED PORT OF DESTINATION'},
    {value: 'DEQ (DELIVERED EX QUAY'},
    {value: 'DES (DELIVERED EX SHIP'},
    {value: 'FREE CARRIER...NAMED PLACE'}
  ]
  code = [
    {value: 'BUC - BULK CARGO'},
    {value: 'CVC - CONVENTIONAL CARGO (ON-DECK'},
    {value: 'CVU - CONVENTIONAL CARGO (UNDER DECK'},
    {value: 'FCL - FULL CONTAINER LOAD'},
    {value: 'LCL - LESS THAN CONTAINER LOAD'},
    {value: 'LOC - LOOSE CARGO/ODD SIZE CARGO (ON-DECK)'}
  ]
  class = [
    {value: 'A - AUTOMOBILES(VEHICLES)/ MOTOR CYCLES'},
    {value: 'B - BULK CARGO'},
    {value: 'D - DOCUMENTS AND PUBLICATIONS'},
    {value: 'E - EMPTY CONTAINER'},
    {value: 'F - FOOD PRODUCTS'},
    {value: 'G - DANGEROUS / EXPLOSIVE/ INFLAMMABLE'},
    {value: 'L - LIVESTOCK'},
    {value: 'P - PERISHABLES/ FROZEN'},
    {value: 'V - VALUABLES'},
    {value: 'X - EXPRESS CARGO'}
  ]
  ngOnInit(): void {
  }

}
