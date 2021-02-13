import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Nubank1Component } from './nubank1/nubank1.component';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';

@NgModule({
  declarations: [
    AppComponent,
    Nubank1Component,
    FizzBuzzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
