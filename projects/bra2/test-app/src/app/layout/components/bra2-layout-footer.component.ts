import { Component } from '@angular/core';

@Component({
  selector: 'bra2-layout-footer',
  template: `
    <footer class="mat-elevation-z8">
      <bra2-layout-container>
        <div
          fxLayout="column"
          fxLayoutAlign="start center"
          fxLayout.gt-sm="row"
        >
          <h1 fxFlex.gt-sm>Cadillac STS-V stuff</h1>
          <bra2-layout-nav></bra2-layout-nav>
        </div>
      </bra2-layout-container>
    </footer>
  `,
})
export class AppLayoutFooterComponent {}
