import { Component } from '@angular/core';
import { Notification } from 'biplab-notifier';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notification = new Notification();
  title = 'notifications';
  constructor() {

    this.notification.title = 'show';
    this.notification.type = 'success';
    this.notification.message = '!! You will see this message with success title';
    this.notification.css.background = 'darkblue';
    this.notification.css.width = '400px';
    this.notification.css.height = 'auto';
    this.notification.isDailog = true;
    this.notification.show();
  }
}
