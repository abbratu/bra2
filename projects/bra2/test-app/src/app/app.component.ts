import { ChangeDetectorRef, Component, HostBinding } from '@angular/core';

export type Bra2Theme = {
  displayName: string,
  className: string,
}

export const supportedThemes: Bra2Theme[] = [{
  displayName: 'Bra2 Light Theme',
  className: 'bra2-light-theme'
}, {
  displayName: 'Bra2 Dark Theme',
  className: 'bra2-dark-theme'
}]

export const defaultTheme: Bra2Theme = supportedThemes[0];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly _cdRef: ChangeDetectorRef) {}
  private _currentTheme: Bra2Theme = defaultTheme;

  @HostBinding('class') get class(): string {
    return 'mat-app-background ' + this._currentTheme.className
  }

  toggle(){
    if (this._currentTheme === supportedThemes[0]) {
      this._currentTheme = supportedThemes[1];
    } else {
      this._currentTheme = supportedThemes[0];
    }

    this._cdRef.detectChanges();
  }

  public get name(): string{
    return this._currentTheme.displayName;
  } 
}
