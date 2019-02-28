import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotificationHint } from '../layout/notifier';
import { Message } from '../message/notifer';
import { isArray } from 'util';
@Component({
  selector: 'biplab-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() layoutHint: NotificationHint;
  @Output() close: EventEmitter<boolean>;
  data: Message;
  constructor() {
    this.close = new EventEmitter<boolean>();
  }

  ngOnInit() {
    if ( this.layoutHint ) {
      if (!isArray(this.layoutHint.data)) {
        this.data = <Message>this.layoutHint.data;
      }
    }
  }


}
