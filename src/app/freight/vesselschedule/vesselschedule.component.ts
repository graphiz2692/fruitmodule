import { Component, OnInit } from '@angular/core';
import { VesselAdvSearchComponent } from '../vessel-adv-search/vessel-adv-search.component';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
@Component({
  selector: 'app-vesselschedule',
  templateUrl: './vesselschedule.component.html',
  styleUrls: ['./vesselschedule.component.scss']
})
export class VesselscheduleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(VesselAdvSearchComponent);

   dialogRef.afterClosed().subscribe(result => {
       console.log(`Dialog result: ${result}`);
     });
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

}
