import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild    } from '@angular/core';
import { NotificationHint } from '../layout/notifier';
import { Message } from '../message/notifer';
import { isArray } from 'util';
import { MultiNotifier } from '../layout/notifier';

@Component({
  selector: 'biplab-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  @ViewChild('parentDailog') myDiv: ElementRef;
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

  closeDailog(event: any) {
    const layout = this.layoutHint.layout as MultiNotifier;
    if ( layout.displayAs === 'dialog' && !layout.disableOutsideClick ) {
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
