import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoHideMessageComponent } from './auto-hide-message.component';
import { NotifierModule } from 'biplab-notifier';
describe('AutoHideMessageComponent', () => {
  let component: AutoHideMessageComponent;
  let fixture: ComponentFixture<AutoHideMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoHideMessageComponent ],
      imports: [ NotifierModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoHideMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
