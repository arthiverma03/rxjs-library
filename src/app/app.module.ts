import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CombilnelatestComponent } from './combilnelatest/combilnelatest.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { StartwithComponent } from './startwith/startwith.component';
import { LatestvalueComponent } from './latestvalue/latestvalue.component';

@NgModule({
  declarations: [
    AppComponent,
    CombilnelatestComponent,
    ConcatComponent,
    MergeComponent,
    StartwithComponent,
    LatestvalueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
