import { Component, Input , OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
 appointments: any [];

  constructor(private  dataService: DataService) { }

  ngOnInit() {
    this.getappointments();
  }


  private getappointments() {
    this.dataService.getAppointments().subscribe(res => {
      this.appointments = res;
    })

  }

}
