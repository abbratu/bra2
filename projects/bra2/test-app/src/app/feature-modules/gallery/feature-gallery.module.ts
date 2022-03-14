import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  template: `
    <h2>Gallery</h2>
`,
})
export class FeatureGalleryPageComponent {}

const routes: Routes = [
  {
    path: '',
    component: FeatureGalleryPageComponent,
  },
];

@NgModule({
  declarations: [FeatureGalleryPageComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureGalleryModule {}
