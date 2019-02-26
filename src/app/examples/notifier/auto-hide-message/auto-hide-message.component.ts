import { Component, OnInit } from '@angular/core';
import { Notification } from 'biplab-notifier';


@Component({
  selector: 'app-auto-hide-message',
  templateUrl: './auto-hide-message.component.html',
  styleUrls: ['./auto-hide-message.component.css']
})
export class AutoHideMessageComponent implements OnInit {
  notification = new Notification();

  constructor() {
    this.notification.type = 'error';
    this.notification.message = 'Opps something went wrong';
    this.notification.timer = { duration: 2000 };
  }

  ngOnInit() {
    this.show();
  }

  show() {
     this.notification.show();
  }
}
