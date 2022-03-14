import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './components/bra2-app-layout.component';
import { AppLayoutContainerComponent } from './components/bra2-layout-column.component';
import { AppLayoutFooterComponent } from './components/bra2-layout-footer.component';
import { AppLayoutHeaderComponent } from './components/bra2-layout-header.component';
import { AppLayoutNavComponent } from './components/bra2-layout-nav.component';
import { Bra2NavLinkComponent } from './components/bra2-nav-link.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppLayoutHeaderComponent,
    AppLayoutFooterComponent,
    AppLayoutNavComponent,
    AppLayoutContainerComponent,
    Bra2NavLinkComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDividerModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    AppLayoutComponent
  ]
})
export class Bra2AppLayoutModule { }
