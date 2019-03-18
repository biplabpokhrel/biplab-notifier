import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierComponent } from './notifier.component';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationsComponent } from '../notifications/notifications.component';

describe('NotifierComponent', () => {
  let component: NotifierComponent;
  let fixture: ComponentFixture<NotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifierComponent, NotificationComponent, NotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
