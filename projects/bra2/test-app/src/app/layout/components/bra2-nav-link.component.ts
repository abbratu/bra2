import { Component, Input } from '@angular/core';

@Component({
  selector: 'bra2-nav-link',
  template: `
    <span routerLinkActive #rla="routerLinkActive" [routerLinkActiveOptions]="{exact: true}">
        <a [disabled]="rla.isActive" mat-button [routerLink]="[link]">{{displayText}}</a>
    </span>
  `,
})
export class Bra2NavLinkComponent {
    @Input() displayText: string = '';
    @Input() link: string = ''
}
