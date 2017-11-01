import { Component, OnInit, Input } from '@angular/core';
import {} from '@angular/'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  @Input() appointment: any;

  constructor() { }

  ngOnInit() {
  }

}
