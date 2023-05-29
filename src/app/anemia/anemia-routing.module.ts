import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnemiaPage } from './anemia.page';

const routes: Routes = [
  {
    path: '',
    component: AnemiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnemiaPageRoutingModule {}
