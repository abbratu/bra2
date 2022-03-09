import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Bra2ThemeSelectorComponent } from './components/bra2-theme-selector/bra2-theme-selector.component';
import { Bra2ThemeConfigService } from './services/bra2-theme-config.service';
import { Brat2ThemeService } from './services/bra2-theme.service';
import { Bra2ThemeConfig } from './types/bra2-theme-config.type';
import { Bra2CommonModule } from '../bra2-common.module';

@NgModule({
  imports: [CommonModule, Bra2CommonModule],
  declarations: [Bra2ThemeSelectorComponent],
  exports: [Bra2ThemeSelectorComponent],
})
export class Bra2ThemeModule {
  static forRoot(
    config: Bra2ThemeConfig
  ): ModuleWithProviders<Bra2ThemeModule> {
    return {
      ngModule: Bra2ThemeModule,
      providers: [
        Brat2ThemeService,
        {
          provide: Bra2ThemeConfigService,
          useValue: config,
        },
      ],
    };
  }
}
