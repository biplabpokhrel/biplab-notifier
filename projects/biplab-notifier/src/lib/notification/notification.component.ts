import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SingleNotifier } from '../layout/notifier';
import { Message } from '../message/notifer';

@Component({
  selector: 'biplab-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input() layout: SingleNotifier;
  @Input() notice: Message;
  @Input() type: string;
  @Output() close: EventEmitter<boolean>;

  constructor() {
    this.close = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  get header(): string {
    if (this.layout && this.layout.title && this.layout.title.status === 'hide') {
      return '';
    }
    return this.type;
  }
}
