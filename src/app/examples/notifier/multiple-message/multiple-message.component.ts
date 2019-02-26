import { Component, OnInit } from '@angular/core';
import { Notification } from 'biplab-notifier';

@Component({
  selector: 'app-multiple-message',
  templateUrl: './multiple-message.component.html',
  styleUrls: ['./multiple-message.component.css']
})
export class MultipleMessageComponent implements OnInit {
  notification = new Notification();
  constructor() { }

  ngOnInit() {
    this.notification.type = 'note';
    this.notification.layoutType = 'multi';
    this.notification.header = 'You can add header message';
    this.notification.messages = ['Messsage1', 'Messsage2', 'Messsage3'];
    this.notification.dismissButton = 'show';
    this.notification.closeButton = 'hide';
    this.notification.show();
  }

}
