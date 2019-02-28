import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { Notifier } from '../action/notifier';
import { MultiNotifier, SingleNotifier, NotificationHint } from '../layout/notifier';
import { Notification } from '../notification';
import { NotifierTemplate } from '../template/notifier';

@Component({
  selector: 'biplab-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent implements OnInit {
  @Input() notifierTemplates?: NotifierTemplate;
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


  get layout(): 'single'|'multi'| null {
    if ( this.notifier.notice.layout instanceof MultiNotifier) {
      return 'multi';
    } else if ( this.notifier.notice.layout instanceof SingleNotifier) {
      return 'single';
    } else {
      return null;
    }
  }

  get notificationHint(): NotificationHint {
    return {
      layout: this.notifier.notice.layout,
      data: this.notifier.notice.data,
      type: this.notifier.type,
      template: this.notifierTemplates
    };
  }

}
