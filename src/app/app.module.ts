import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCrudUiModule } from 'projects/ng-crud-ui/src';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCrudUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
