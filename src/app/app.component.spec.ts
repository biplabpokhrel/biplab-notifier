import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NotifierModule } from 'biplab-notifier';
import { CustomTemplateComponent } from './examples/notifier/custom-template/custom-template.component';
import { AutoHideMessageComponent } from './examples/notifier/auto-hide-message/auto-hide-message.component';
import { MultipleMessageComponent } from './examples/notifier/multiple-message/multiple-message.component';
import { IconTemplateComponent } from './examples/notifier/icon-template/icon-template.component';
import { ShowOnClickComponent } from './examples/notifier/show-on-click/show-on-click.component';
import { SnackbarComponent } from './examples/notifier/snackbar/snackbar.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CustomTemplateComponent,
        AutoHideMessageComponent,
        MultipleMessageComponent,
        IconTemplateComponent,
        ShowOnClickComponent,
        SnackbarComponent
      ],
      imports: [ NotifierModule ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'notifications'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('notifications');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Example of Notifications');
  });
});
