import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  exports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule
  ]
})
export class Bra2CommonModule { }
