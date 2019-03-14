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

  constructor() {
    this.close = new EventEmitter<boolean>();
  }

  ngOnInit() {
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

  get message(): string {
    return this.layoutHint && this.layoutHint.data ? this.layoutHint.data['message'] : '';
  }

}
