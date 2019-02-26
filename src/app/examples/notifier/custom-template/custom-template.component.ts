import { Component, OnInit } from '@angular/core';
import { Notification } from 'biplab-notifier';

@Component({
  selector: 'app-custom-template',
  templateUrl: './custom-template.component.html',
  styleUrls: ['./custom-template.component.css']
})
export class CustomTemplateComponent implements OnInit {
  notification = new Notification();
  constructor() {
  }

  ngOnInit() {
    this.notification.show();
    this.notification.message = 'This data is passing into template';
  }

}
