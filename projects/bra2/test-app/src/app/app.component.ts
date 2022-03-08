import { ChangeDetectorRef, Component, HostBinding } from '@angular/core';
import { Brat2ThemeService } from './theme/bra2-theme.service';

// export type Bra2Theme = {
//   displayName: string,
//   className: string,
// }

// export const supportedThemes: Bra2Theme[] = [{
//   displayName: 'Bra2 Light Theme',
//   className: 'bra2-light-theme'
// }, {
//   displayName: 'Bra2 Dark Theme',
//   className: 'bra2-dark-theme'
// }]

// export const defaultTheme: Bra2Theme = supportedThemes[0];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  
  @HostBinding('class') get class(): string {
    return 'mat-app-background ' + this._themeService.currentTheme.className;
  }

  constructor(
    private readonly _themeService: Brat2ThemeService,
  ) {
  }

  toggle() {
    this._themeService.currentThemeKey = this._themeService.currentThemeKey === 'bra2-light-theme' ?
      'bra2-dark-theme' : 'bra2-light-theme';
  }

  public get name(): string {
    return this._themeService.currentThemeDisplayName;
  }
}
