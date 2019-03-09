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

     this.notification.show();
  }

  show() {
    // this.notification.isSnack = true;
    // this.notification.isDailog = true;
    // this.notification.css.s
    this.notification.isNotification = true;
    // this.notification.css.position = 'center';
    this.notification.css.shadow = true;
    this.notification.show();
  }

  showAsDialog() {
    this.notification.isDailog = true;
    this.notification.css.shadow = true;
     this.notification.show();
  }

  showAsSnack() {
     this.notification.isSnack = true;
     this.notification.css.position = 'center';
     this.notification.show();
  }

  cancelAutoHide() {
    this.notification.timer = null;
  }
}
