import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  template: `
    <h2>Specs</h2>
    <h3>Engine</h3>
    <div>
        Displacement: 4,371 cc (267 cu in)
        Power: 469 hp (350 kW; 476 PS) at 6400 rpm (SAE-certified)
        Torque: 439 lb⋅ft (595 N⋅m) at 3900 rpm
        Redline: 6700 rpm
        Compression ratio: 9.0:1
    </div>
    <h3>Transmission</h3>
    <h3>Body</h3>
  `,
})
export class FeatureSpecsPageComponent {}

const routes: Routes = [
  {
    path: '',
    component: FeatureSpecsPageComponent,
  },
];

@NgModule({
  declarations: [FeatureSpecsPageComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureSpecsModule {}
