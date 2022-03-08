import { Inject, Injectable, InjectionToken } from '@angular/core';

export type Bra2Theme = {
  displayName: string;
  className: string;
};

export type Bra2Themes = {
  [name: string]: Bra2Theme;
};

export type Bra2ThemeConfig = {
  defaultThemeKey: string;
  supportedThemes: Bra2Themes;
};

export const Bra2ThemeConfigService = new InjectionToken<Bra2ThemeConfig>(
  'Bra2ThemeConfig'
);

@Injectable({
  providedIn: 'root',
})
export class Brat2ThemeService {
  private _currentThemeKey: string;

  constructor(
    @Inject(Bra2ThemeConfigService) private readonly _config: Bra2ThemeConfig
  ) {
    if (
      !_config || // no config
      !_config.supportedThemes || // no themes
      Object.keys(_config.supportedThemes).length === 0 || // empty dictionary
      !_config.defaultThemeKey || // no default theme
      _config.defaultThemeKey.length === 0 || // empty string
      !_config.supportedThemes[_config.defaultThemeKey] // default key not found in dictionary
    ) {
      throw 'Brat2ThemeService: configuration required';
    }

    this._currentThemeKey = _config.defaultThemeKey;
  }

  public get currentThemeKey(): string {
    return this._currentThemeKey;
  }

  public set currentThemeKey(key: string) {
    if (!this._config.supportedThemes[this._config.defaultThemeKey]) {
      throw 'Brat2ThemeService: invalid key';
    }
  }

  public get currentTheme(): Bra2Theme {
    return this._config.supportedThemes[this.currentThemeKey];
  }

  public get currentThemeDisplayName(): string {
    return this.currentTheme.displayName;
  }

  public get currentThemeClassName(): string {
    return this.currentTheme.className;
  }
}
