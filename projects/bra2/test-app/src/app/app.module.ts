import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Bra2CommonModule } from './bra2-common.module';
import { Bra2AppLayoutModule } from './layout/bra2-app-layout.module';
import { Bra2ThemeModule } from './theme/bra2-theme.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature-modules/home/feature-home.module').then(m => m.FeatureHomeModule)
  },
  {
    path: 'specs',
    loadChildren: () => import('./feature-modules/specs/feature-specs.module').then(m => m.FeatureSpecsModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./feature-modules/gallery/feature-gallery.module').then(m => m.FeatureGalleryModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./feature-modules/contact/feature-contact.module').then(m => m.FeatureContactModule)
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Bra2CommonModule,
    RouterModule.forRoot(routes),
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
    }),
    Bra2AppLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
