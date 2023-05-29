import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisCasasPage } from './mis-casas.page';

const routes: Routes = [
  {
    path: '',
    component: MisCasasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisCasasPageRoutingModule {}
