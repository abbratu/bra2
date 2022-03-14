import { Component } from '@angular/core';

@Component({
  selector: 'bra2-app-layout',
  template: `
    <div fxLayout="column" fxFlexFill>
      <bra2-layout-header></bra2-layout-header>
      <main fxFlex>
        <bra2-layout-container>
          <ng-content></ng-content>
        </bra2-layout-container>
      </main>
      <bra2-layout-footer></bra2-layout-footer>
    </div>
  `,
  styles: [
  ],
})
export class AppLayoutComponent {}
