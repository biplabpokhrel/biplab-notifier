import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoHideMessageComponent } from './auto-hide-message.component';

describe('AutoHideMessageComponent', () => {
  let component: AutoHideMessageComponent;
  let fixture: ComponentFixture<AutoHideMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoHideMessageComponent ]
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
