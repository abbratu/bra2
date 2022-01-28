import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const CoreModules = [
  BrowserAnimationsModule,
  FlexLayoutModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: CoreModules,
  exports: CoreModules,
})
export class BratuCoreModule {}
