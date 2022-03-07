import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Bra2CommonModule } from './bra2-common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Bra2CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
