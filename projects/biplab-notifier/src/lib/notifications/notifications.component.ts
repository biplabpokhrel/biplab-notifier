import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { MultiNotifier, NotificationHint } from '../layout/notifier';
import { Message } from '../message/notifer';
import { isArray } from 'util';
import { throws } from 'assert';

@Component({
  selector: 'biplab-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  @Input() layoutHint: NotificationHint;
  @Output() close: EventEmitter<boolean>;
  data: Message[];
  constructor() {
    this.close = new EventEmitter<boolean>();
  }

  ngOnInit() {
    if ( this.layoutHint ) {
      if (isArray(this.layoutHint.data)) {
        this.data = <Message[]>this.layoutHint.data;
      }
    }
  }

}
