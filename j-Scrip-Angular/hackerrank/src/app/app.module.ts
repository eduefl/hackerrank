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
import { NewYearCaosComponent } from './new-year-caos/new-year-caos.component';
import { MinimumSwaps2Component } from './minimum-swaps2/minimum-swaps2.component';
import { ArrayManipulationComponent } from './array-manipulation/array-manipulation.component';
import { RansonNoteComponent } from './ranson-note/ranson-note.component';
import { TwoStringsComponent } from './two-strings/two-strings.component';
import { SherlockComponent } from './sherlock/sherlock.component';
import { CountTriplesComponent } from './count-triples/count-triples.component';

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
    LeftRotationComponent,
    NewYearCaosComponent,
    MinimumSwaps2Component,
    ArrayManipulationComponent,
    RansonNoteComponent,
    TwoStringsComponent,
    SherlockComponent,
    CountTriplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
