import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Bra2CommonModule } from './bra2-common.module';
import { Bra2ThemeModule } from './theme/bra2-theme.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Bra2CommonModule,
    Bra2ThemeModule.forRoot({
      defaultThemeKey: 'bra2-light-theme',
      supportedThemes: {
        'bra2-light-theme': {
          displayName: 'Bra2 Light Theme',
          className: 'bra2-light-theme',
          key: 'bra2-light-theme'
        },
        'bra2-dark-theme': {
          displayName: 'Bra2 Dark Theme',
          className: 'bra2-dark-theme',
          key: 'bra2-dark-theme'
        },
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
