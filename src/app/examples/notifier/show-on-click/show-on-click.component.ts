import {  Component, OnInit } from '@angular/core';
import { Notification } from 'biplab-notifier';

@Component({
  selector: 'app-show-on-click',
  templateUrl: './show-on-click.component.html',
  styleUrls: ['./show-on-click.component.css']
})
export class ShowOnClickComponent implements OnInit {
  notification = new Notification();
  notificationMulti = new Notification('multi');
  constructor() {
    this.notification.message = 'Opps something went wrong';
  }

  ngOnInit() {
  }

  clickToShowHelp() {
    this.notification.type = 'help';
    this.notification.show();
  }

  clickToShowError() {
    this.notification.type = 'error';
    this.notification.show();
  }

  clickToShowWarn() {
    this.notification.type = 'warn';
    this.notification.show();
  }

  clickToShowNote() {
    this.notification.type = 'note';
    this.notification.show();
  }

  clickToShowSuccess() {
    this.notification.type = 'success';
    this.notification.show();
  }

  clickToShowHelpMulti() {
    this.notificationMulti.layoutType = 'multi';
    this.notificationMulti.type = 'help';
    this.notificationMulti.messages = ['help1', 'help2', 'help3'];
    this.notificationMulti.show();
  }

  clickToShowErrorMulti() {
    this.notificationMulti.type = 'error';
    this.notificationMulti.messages = ['error1', 'error2', 'error3'];
    this.notificationMulti.show();
  }

  clickToShowWarnMulti() {
    this.notificationMulti.messages = ['warn1', 'warn2', 'warn3'];
    this.notification.isDialog = true;
    this.notificationMulti.type = 'warn';
    this.notificationMulti.css.shadow = false;
    this.notificationMulti.show();
  }

  clickToShowNoteMulti() {
    this.notificationMulti.messages = ['Note1', 'Note2', 'Note3'];
    this.notificationMulti.type = 'note';
    this.notificationMulti.css.shadow = true;
    this.notificationMulti.show();
  }

  clickToShowSuccessMulti() {
    this.notificationMulti.messages = ['Success1', 'Success2', 'Success3'];
    this.notificationMulti.type = 'success';
    this.notificationMulti.show();
  }

  clickToHide() {
    this.notification.hide();
    this.notificationMulti.hide();
  }

}
