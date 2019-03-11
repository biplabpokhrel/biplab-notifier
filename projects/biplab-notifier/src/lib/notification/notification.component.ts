import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild   } from '@angular/core';
import { NotificationHint } from '../layout/notifier';
import { Message } from '../message/notifer';
import { isArray } from 'util';
@Component({
  selector: 'biplab-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @ViewChild('parentDailog') myDiv: ElementRef;
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

  closeDailog(event: any) {
    if ( this.layoutHint.layout.displayAs === 'dialog' && !this.layoutHint.layout.disableOutsideClick ) {
      if (event  && event.target === this.myDiv.nativeElement) {
        this.close.emit(false);
      }
    }
  }

  notificationClose(status: boolean) {
    this.close.emit(status);
  }

  get shadow(): string {
    return !!this.layoutHint.css.shadow ? `${ this.layoutHint.layout.displayAs }-shadow` : '';
  }
}
