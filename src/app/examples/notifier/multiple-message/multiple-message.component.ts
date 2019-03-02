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
   // this.notification.header = 'Multiple Message';
  //  this.notification.title = 'hide';
  //  this.notification.header = 'You can add header message';
  //  this.notification.messages = ['Messsage1', 'Messsage2', 'Messsage3'];
  //  this.notification.dismissButton = 'show';
  //  this.notification.closeButton = 'show';
    this.notification.body = 'hide';
    this.notification.trueButton = 'Yes';
    this.notification.falseButton = 'No';
    this.notification.css.width = '300px';
    this.notification.css.height = 'auto';
    this.notification.titleText = 'Delete';
    this.notification.header = 'Are you sure ??';
    this.notification.isDailog = true;
    // this.notification.css.background = 'red';
    // this.notification.css.color = 'white';
    this.notification.show();

  }

  ngOnInit() {

  }

  show() {
    // this.notification.afterClosed
    // .pipe(filter((status: boolean) => status))
    // .subscribe((d) => console.log(d));
    // this.notification.show();
  }

}
