import { Component, OnInit } from '@angular/core';
import { Notification } from 'biplab-notifier';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  snackbar: Notification;

  constructor() {
    this.snackbar = new Notification();
    this.snackbar.isSnack = true;
    this.snackbar.timer = { duration: 4000 };
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
}
