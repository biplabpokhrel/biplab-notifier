import { Component, OnInit } from '@angular/core';
import { Notification } from 'biplab-notifier';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {
  snackbarMulti: Notification;
  snackbar: Notification;

  constructor() {
    this.snackbarMulti = new Notification( 'multi', 'snack-bar');
    this.snackbar = new Notification('single', 'snack-bar');
    this.snackbar.timer = { duration: 4000 };
    this.snackbarMulti.timer = { duration: 4000 };
  }

  ngOnInit() {

  }

  showTop() {
    this.snackbar.css.position = 'top';
    this.snackbar.type = 'success';
    this.snackbar.message = 'This is top success';
    this.snackbar.show();
  }

  showBottom() {
    this.snackbar.css.position = 'bottom';
    this.snackbar.type = 'warn';
     this.snackbar.message = 'This is warn bottom';
    this.snackbar.show();
  }

  showLeft() {
    this.snackbar.css.position = 'left';
    this.snackbar.type = 'note';
     this.snackbar.message = 'This is note left';
    this.snackbar.show();
  }

  showRight() {
    this.snackbar.css.position = 'right';
    this.snackbar.type = 'help';
     this.snackbar.message = 'This is help right';
    this.snackbar.show();
  }

  showTopMulti() {
    this.snackbarMulti.css.position = 'top';
    this.snackbarMulti.type = 'success';
    this.snackbarMulti.messages = [
      'This is top success 1',
      'This is top success 2',
      'This is top success 3',
      'This is top success 4',
      'This is top success 5',
    ];
    this.snackbarMulti.show();
  }

  showBottomMulti() {
    this.snackbarMulti.css.position = 'bottom';
    this.snackbarMulti.type = 'warn';
     this.snackbarMulti.messages = [
       'This is warn bottom 1',
       'This is warn bottom 2',
       'This is warn bottom 3',
       'This is warn bottom 4',
       'This is warn bottom 5',
      ];
    this.snackbarMulti.show();
  }

  showLeftMulti() {
    this.snackbarMulti.css.position = 'left';
    this.snackbarMulti.type = 'note';
     this.snackbarMulti.messages = [
       'This is note left 1',
       'This is note left 2',
       'This is note left 3',
       'This is note left 4',
       'This is note left 5',
      ];
    this.snackbarMulti.show();
  }

  showRightMulti() {
    this.snackbarMulti.css.position = 'right';
    this.snackbarMulti.type = 'help';
     this.snackbarMulti.messages = [
       'This is help right 1',
       'This is help right 2',
       'This is help right 3',
       'This is help right 4',
       'This is help right 5'
      ];
    this.snackbarMulti.show();
  }
}
