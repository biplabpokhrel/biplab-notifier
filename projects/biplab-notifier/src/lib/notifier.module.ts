import { NgModule } from '@angular/core';
import { NotifierComponent } from './notifier/notifier.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NotifierComponent, NotificationComponent, NotificationsComponent],
  imports: [
    CommonModule
  ],
  exports: [NotifierComponent]
})

export class NotifierModule { }
