import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-equipmentlist',
  templateUrl: './equipmentlist.component.html',
  styleUrls: ['./equipmentlist.component.scss']
})
export class EquipmentlistComponent implements OnInit {
  public isCollapsed: boolean = false;
  
  ngOnInit(): void {
  }

  LargeOpen1(largemodal1) {
    this.modalService.open(largemodal1, { size: 'lg' });
  }
  
  LargeOpen2(largemodal2) {
    this.modalService.open(largemodal2, { size: 'lg' });
  }
  
  LargeOpen3(largemodal3) {
    this.modalService.open(largemodal3, { size: 'sm' });
  }
    
  public mdequipment :any[]= [
    {size:'20', type:'HR', description:'40 FLAT RACK', typesize:'40FR', grosswgt:'2300', height:'86', 
    container:'', reefer:'', tarewgt:'0', teu:'0', isocode:'42G0,42G1', mappingcode:'', action:''}, 
    {size:'20', type:'HR', description:'40 FLAT RACK', typesize:'40FR', grosswgt:'2300', height:'86', 
    container:'', reefer:'', tarewgt:'0', teu:'0', isocode:'42G0,42G1', mappingcode:'', action:''}, 
    {size:'20', type:'HR', description:'40 FLAT RACK', typesize:'40FR', grosswgt:'2300', height:'86', 
    container:'', reefer:'', tarewgt:'0', teu:'0', isocode:'42G0,42G1', mappingcode:'', action:''},
    {size:'20', type:'HR', description:'40 FLAT RACK', typesize:'40FR', grosswgt:'2300', height:'86', 
    container:'', reefer:'', tarewgt:'0', teu:'0', isocode:'42G0,42G1', mappingcode:'', action:''},
    {size:'20', type:'HR', description:'40 FLAT RACK', typesize:'40FR', grosswgt:'2300', height:'86', 
    container:'', reefer:'', tarewgt:'0', teu:'0', isocode:'42G0,42G1', mappingcode:'', action:''}];

    constructor( private modalService: NgbModal,) { 
      const datePickerConfig = {
        firstDayOfWeek: 'su',
        monthFormat: 'MMM, YYYY',
        disableKeypress: false,
        allowMultiSelect: false,
        closeOnSelect: undefined,
        closeOnSelectDelay: 100,
        onOpenDelay: 0,
        weekDayFormat: 'ddd',
        appendTo: document.body,
        drops: 'down',
        opens: 'right',
        showNearMonthDays: true,
        showWeekNumbers: false,
        enableMonthSelector: true,
        format: "YYYY-MM-DD HH:mm",
        yearFormat: 'YYYY',
        showGoToCurrent: true,
        dayBtnFormat: 'DD',
        monthBtnFormat: 'MMM',
        hours12Format: 'hh',
        hours24Format: 'HH',
        meridiemFormat: 'A',
        minutesFormat: 'mm',
        minutesInterval: 1,
        secondsFormat: 'ss',
        secondsInterval: 1,
        showSeconds: false,
        showTwentyFourHours: true,
        timeSeparator: ':',
        multipleYearsNavigateBy: 10,
        showMultipleYearsNavigation: false,
      }
    }
}
