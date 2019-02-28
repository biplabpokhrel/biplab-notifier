import { Component, OnInit } from '@angular/core';
import { Notification } from 'biplab-notifier';

@Component({
  selector: 'app-multiple-message',
  templateUrl: './multiple-message.component.html',
  styleUrls: ['./multiple-message.component.css']
})
export class MultipleMessageComponent implements OnInit {
  notification = new Notification();
  constructor() {
    this.notification.type = 'note';
    this.notification.layoutType = 'multi';
    this.notification.header = 'Multiple Message';
  //  this.notification.title = 'hide';
  //  this.notification.header = 'You can add header message';
    this.notification.messages = ['Messsage1', 'Messsage2', 'Messsage3'];
  //  this.notification.dismissButton = 'show';
  //  this.notification.closeButton = 'show';
    this.notification.body = 'hide';
    this.notification.show();

  }

  ngOnInit() {

    this.notification.afterOpen.subscribe((d) => console.log(d));
  }

}
