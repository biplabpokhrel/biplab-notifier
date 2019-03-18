import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTemplateComponent } from './icon-template.component';
import { NotifierModule } from 'biplab-notifier';
describe('IconTemplateComponent', () => {
  let component: IconTemplateComponent;
  let fixture: ComponentFixture<IconTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconTemplateComponent ],
      imports: [ NotifierModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
