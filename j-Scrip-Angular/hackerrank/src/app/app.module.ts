import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Nubank1Component } from './nubank1/nubank1.component';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';
import { SalesByMatchComponent } from './sales-by-match/sales-by-match.component';
import { CoutingValeyComponent } from './couting-valey/couting-valey.component';
import { JumpingOnTheCloudsComponent } from './jumping-on-the-clouds/jumping-on-the-clouds.component';
import { RepeatedStringComponent } from './repeated-string/repeated-string.component';
import { A2DArrayDsComponent } from './a2-darray-ds/a2-darray-ds.component';
import { LeftRotationComponent } from './left-rotation/left-rotation.component';

@NgModule({
  declarations: [
    AppComponent,
    Nubank1Component,
    FizzBuzzComponent,
    SalesByMatchComponent,
    CoutingValeyComponent,
    JumpingOnTheCloudsComponent,
    RepeatedStringComponent,
    A2DArrayDsComponent,
    LeftRotationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
