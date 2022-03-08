import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  Bra2ThemeConfig,
  Bra2ThemeConfigService,
  Brat2ThemeService,
} from './bra2-theme.service';

@NgModule()
export class Bra2ThemeModule {
  static forRoot(config: Bra2ThemeConfig): ModuleWithProviders<Bra2ThemeModule> {
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
