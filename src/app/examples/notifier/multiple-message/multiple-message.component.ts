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
    this.notification.messages = [
      'hi',
      'hell',
      'How are you',
      'I know',
      'this is very',
      'long message',
      'but',
      'I have to test this one',
      'to see how is this going to look like',
      'when there are so many stuff to show the people',
      '------------------------------------------------',
      'hi',
      'hell',
      'How are you',
      'I know',
      'this is very',
      'long message',
      'but',
      'I have to test this one',
      'to see how is this going to look like',
      'when there are so many stuff to show the people',
      '\n',
      'hi',
      'hell',
      'How are you',
      'I know',
      'this is very',
      'long message',
      'but',
      'I have to test this one',
      'to see how is this going to look like',
      'when there are so many stuff to show the people when there are so many stuff to show the people ',
      ''
    ];
    this.notification.trueButton = 'Yes';
    this.notification.falseButton = 'No';
    this.notification.css.width = '100000px';
    this.notification.css.height = '100000px';
    this.notification.titleText = 'Delete';
    this.notification.header = 'Are you sure ??';
    this.notification.isDialog = true;
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
