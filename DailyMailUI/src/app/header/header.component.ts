import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  intelLogo = 'assets/intel-logo-white-100.png';

  constructor(private msgService: MessagingService) { }

  ngOnInit() {
  }

  notificationChange($event) {
    console.log($event);
  }

}
