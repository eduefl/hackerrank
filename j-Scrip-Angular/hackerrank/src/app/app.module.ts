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
import { FrequencyQueriesComponent } from './frequency-queries/frequency-queries.component';
import { BubleSortComponent } from './buble-sort/buble-sort.component';
import { MarkandToysComponent } from './markand-toys/markand-toys.component';
import { FraudulentActivityNotificationsComponent } from './fraudulent-activity-notifications/fraudulent-activity-notifications.component';
import { SortingComparatorComponent } from './sorting-comparator/sorting-comparator.component';
import { MergeSortCountingInversionsComponent } from './merge-sort-counting-inversions/merge-sort-counting-inversions.component';
import { LilisHomeworkComponent } from './lilis-homework/lilis-homework.component';
import { MakingAnagramsComponent } from './making-anagrams/making-anagrams.component';
import { AlternatingCharactersComponent } from './alternating-characters/alternating-characters.component';
import { SherlockValidStringComponent } from './sherlock-valid-string/sherlock-valid-string.component';

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
    CountTriplesComponent,
    FrequencyQueriesComponent,
    BubleSortComponent,
    MarkandToysComponent,
    FraudulentActivityNotificationsComponent,
    SortingComparatorComponent,
    MergeSortCountingInversionsComponent,
    LilisHomeworkComponent,
    MakingAnagramsComponent,
    AlternatingCharactersComponent,
    SherlockValidStringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
