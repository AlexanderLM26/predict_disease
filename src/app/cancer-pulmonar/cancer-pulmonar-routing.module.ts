import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancerPulmonarPage } from './cancer-pulmonar.page';

const routes: Routes = [
  {
    path: '',
    component: CancerPulmonarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancerPulmonarPageRoutingModule {}
