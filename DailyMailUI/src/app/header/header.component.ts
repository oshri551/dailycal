import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../services/messaging.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  intelLogo = 'assets/intel-logo-white-100.png';

  constructor(private msgService: MessagingService, private dataSvc: DataService) { }

  ngOnInit() {
  }

  notificationChange($event) {
    console.log($event);
    if ($event.checked) {
      this.msgService.messaging.getToken()
        .then(token => {
          this.dataSvc.register(token);
        })
        .catch(err => console.log(err));
    }
  }

}
