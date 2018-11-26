import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FiltersComponent } from './filters/filters.component';
import { GridComponent } from './grid/grid.component';
import { QuickActionComponent } from './quick-action/quick-action.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FiltersComponent,
    GridComponent,
    QuickActionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
