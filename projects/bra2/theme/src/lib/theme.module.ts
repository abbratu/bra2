import { ModuleWithProviders, NgModule } from '@angular/core';
import { Bra2ThemeConfig, Bra2ThemeConfigService, Brat2ThemeService } from './services/theme.service';

@NgModule()
export class ThemeModule { 
  static forRoot(config: Bra2ThemeConfig): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        Brat2ThemeService,
        {
          provide: Bra2ThemeConfigService,
          useValue: config
        }
      ]
    }
  }
}
