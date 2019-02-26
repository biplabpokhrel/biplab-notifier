import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NotifierModule } from "biplab-notifier";
import { CustomTemplateComponent } from './examples/notifier/custom-template/custom-template.component';
import { AutoHideMessageComponent } from './examples/notifier/auto-hide-message/auto-hide-message.component';
import { MultipleMessageComponent } from './examples/notifier/multiple-message/multiple-message.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomTemplateComponent,
    AutoHideMessageComponent,
    MultipleMessageComponent
  ],
  imports: [
    BrowserModule,
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
