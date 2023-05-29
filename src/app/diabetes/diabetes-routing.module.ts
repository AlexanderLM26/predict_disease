import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesPage } from './diabetes.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesPageRoutingModule {}
