import { Component, OnInit } from '@angular/core';
import { Notification } from 'biplab-notifier';
import { filter } from 'rxjs/operators';
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
    this.notification.body = 'hide';
    this.notification.messages = ['hi'];
    this.notification.trueButton = 'Yes';
    this.notification.falseButton = 'No';
    this.notification.css.width = '300px';
    this.notification.css.height = 'auto';
    this.notification.titleText = 'Delete';
    this.notification.header = 'Are you sure ??';
    this.notification.isDailog = true;
    this.notification.css.shadow = true;
  }

  ngOnInit() {

  }

  show() {
    this.notification.show();
    this.notification.afterClosed
    .pipe(filter((status: boolean) => status))
    .subscribe((d) => console.log(d));
  }

}
