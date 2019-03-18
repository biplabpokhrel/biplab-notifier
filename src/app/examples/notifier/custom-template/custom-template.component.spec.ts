import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTemplateComponent } from './custom-template.component';
import { NotifierModule } from 'biplab-notifier';
describe('CustomTemplateComponent', () => {
  let component: CustomTemplateComponent;
  let fixture: ComponentFixture<CustomTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTemplateComponent ],
      imports: [ NotifierModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
