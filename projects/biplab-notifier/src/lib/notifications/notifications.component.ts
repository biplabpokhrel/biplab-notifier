import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { MultiNotifier } from '../layout/notifier';
import { Message } from '../message/notifer';

@Component({
  selector: 'biplab-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  @Input() layout: MultiNotifier;
  @Input() notices: Message[] = [];
  @Input() type: string;
  @Output() close: EventEmitter<boolean>;

  constructor() {
    this.close = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

}
