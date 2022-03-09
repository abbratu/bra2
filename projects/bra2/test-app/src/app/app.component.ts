import { ChangeDetectorRef, Component, HostBinding } from '@angular/core';
import { Brat2ThemeService } from './theme/services/bra2-theme.service';


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

}
