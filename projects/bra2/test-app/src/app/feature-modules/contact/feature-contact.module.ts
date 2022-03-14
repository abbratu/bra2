import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  template: ` <h2>Contact</h2> `,
})
export class FeatureContactPageComponent {}

const routes: Routes = [
  {
    path: '',
    component: FeatureContactPageComponent,
  },
];

@NgModule({
  declarations: [FeatureContactPageComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureContactModule {}
