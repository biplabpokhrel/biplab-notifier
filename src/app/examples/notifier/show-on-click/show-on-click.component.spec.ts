import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOnClickComponent } from './show-on-click.component';
import { NotifierModule } from 'biplab-notifier';
describe('ShowOnClickComponent', () => {
  let component: ShowOnClickComponent;
  let fixture: ComponentFixture<ShowOnClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOnClickComponent ],
      imports: [ NotifierModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOnClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
