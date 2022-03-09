import { Component } from '@angular/core';
import { Brat2ThemeService } from '../../services/bra2-theme.service';
import { Bra2Theme } from '../../types/bra2-theme.type';

@Component({
  selector: 'bra2-theme-selector',
  template: `
    <mat-form-field>
      <mat-label>Favorite food</mat-label>
      <mat-select (selectionChange)="onSelectionChange($event.value)" [value]="value">
        <mat-option *ngFor="let theme of themes" [value]="theme.key">
          {{ theme.displayName }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
})
export class Bra2ThemeSelectorComponent {
  constructor(private readonly _themeService: Brat2ThemeService) {
  }

  onSelectionChange(key: string) {
    this._themeService.currentThemeKey = key;
  }

  public get value(): string {
    return this._themeService.currentThemeKey;
  }

  public get themes(): Bra2Theme[] {
    return this._themeService.themes;
  }
}
