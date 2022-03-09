import { InjectionToken } from '@angular/core';
import { Bra2ThemeConfig } from './../types/bra2-theme-config.type';

export const Bra2ThemeConfigInjectionToken = 'Bra2ThemeConfig';

export const Bra2ThemeConfigService = new InjectionToken<Bra2ThemeConfig>(
  Bra2ThemeConfigInjectionToken
);
