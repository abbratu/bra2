import { Component } from '@angular/core';

@Component({
  selector: 'bra2-layout-nav',
  template: `
    <nav
      fxLayout="column"
      fxLayoutAdivgn="start center"
      fxLayout.gt-sm="row"
      fxLayoutGap="4px"
    >
      <bra2-nav-link [displayText]="'Home'" [link]="'/'"></bra2-nav-link>
      <mat-divider></mat-divider>
      <bra2-nav-link [displayText]="'Specs'" [link]="'/specs'"></bra2-nav-link>
      <mat-divider></mat-divider>
      <bra2-nav-link
        [displayText]="'Gallery'"
        [link]="'/gallery'"
      ></bra2-nav-link>
      <mat-divider></mat-divider>
      <bra2-nav-link
        [displayText]="'Contact'"
        [link]="'/contact'"
      ></bra2-nav-link>
    </nav>
  `,
})
export class AppLayoutNavComponent {}
