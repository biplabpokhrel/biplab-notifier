import { Component, OnInit } from '@angular/core';
import { Notification } from 'biplab-notifier';

@Component({
  selector: 'app-icon-template',
  templateUrl: './icon-template.component.html',
  styleUrls: ['./icon-template.component.css']
})

export class IconTemplateComponent implements OnInit {
  notificationMulti = new Notification();
  notification = new Notification();
  title = 'notifications';
  constructor() {
   // this.notification.title = 'hide';
    this.notification.type = 'success';
    this.notification.message = 'This is icon template';
    this.notification.show();

    this.notificationMulti.layoutType = 'multi';
    this.notificationMulti.body = 'show';
    this.notificationMulti.title = 'show';
    this.notificationMulti.type = 'note';
   // this.notificationMulti.messages = ['Message1', 'Message2'];
    this.notificationMulti.closeButton = 'show';
    this.notificationMulti.css.height = 'auto';
  }

  ngOnInit() {
  }

  openInPage() {
    this.notificationMulti.isNotification = true;
    this.notificationMulti.show();
  }

  openDailog() {
    this.notificationMulti.isDialog = true;
    this.notificationMulti.disableOutsideClick = true;
    this.notificationMulti.show();
  }

}
