import { Component } from '@angular/core';

@Component({
  selector: 'bra2-layout-container',
  template: `
    <div fxLayout="row">
      <div fxFlex="8px" fxFlex.gt-md></div>
      <div fxFlex fxFlex.gt-md="1280px" [style.padding]="'8px'">
        <ng-content></ng-content>
      </div>
      <div fxFlex="8px" fxFlex.gt-md></div>
    </div>
  `,
})
export class AppLayoutContainerComponent {}
