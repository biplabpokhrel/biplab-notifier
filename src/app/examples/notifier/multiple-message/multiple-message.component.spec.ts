import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleMessageComponent } from './multiple-message.component';
import { NotifierModule } from 'biplab-notifier';
describe('MultipleMessageComponent', () => {
  let component: MultipleMessageComponent;
  let fixture: ComponentFixture<MultipleMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleMessageComponent ],
      imports: [ NotifierModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
