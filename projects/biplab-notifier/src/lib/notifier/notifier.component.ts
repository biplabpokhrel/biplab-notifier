import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Notifier } from '../action/notifier';
import { MultiNotifier, SingleNotifier } from '../layout/notifier';
import { Message } from '../message/notifer';
import { Notification } from '../notification';

@Component({
  selector: 'biplab-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent implements OnInit {

  @Input() customTemplate: TemplateRef<any>;
  @Input() notification: Notification;
  notifier: Notifier;

  constructor() { }

  ngOnInit() {
    if (this.notification) {
      this.notifier = new Notifier(this.notification);
    }
  }

  close() {
    this.notifier.deactivate();
  }

  icon(messageType: string): string {
    return `../../../assets/icons/${messageType}.svg`;
  }

  get status(): boolean {
    if (this.notifier.isActive && this.timer) {
      setTimeout(() => {
        this.close();
      } , this.timer);
    }
    return this.notifier.isActive;
  }

  get timer(): number | null {
    if ( this.notifier.notice.timer ) {
      return this.notifier.notice.timer.duration;
    }
    return null;
  }

  get notice(): Message | null {
    if ( this.layout === 'single' ) {
      return <Message>this.notifier.notice.data;
    }
    return null;
  }

  get notices(): Message[] | null {
    if ( this.layout === 'multi' ) {
      return <Message[]>this.notifier.notice.data;
    }
    return null;
  }

  get layout(): 'single'|'multi'| null {
    if ( this.notifier.notice.layout instanceof MultiNotifier) {
      return 'multi';
    } else if ( this.notifier.notice.layout instanceof SingleNotifier) {
      return 'single';
    } else {
      return null;
    }
  }

  get data(): { messageType: string, msg: string | string[], dataType: string} {
    if (Array.isArray(this.notifier.notice.data)) {
      return {
        messageType: this.notifier.type || 'Not set',
        msg: this.notifier.notice.data ? this.notifier.notice.data.map(({ message }) => message) : [],
        dataType: 'list' };
    }
    return {
      messageType: this.notifier.type || 'Not set',
      msg: this.notifier.notice.data ? this.notifier.notice.data['message'] : '',
      dataType: 'single'
    };
  }

}
