import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  template: ` <h2>Home</h2> `,
})
export class FeatureHomePageComponent {}

const routes: Routes = [
  {
    path: '',
    component: FeatureHomePageComponent,
  },
];

@NgModule({
  declarations: [FeatureHomePageComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureHomeModule {}
