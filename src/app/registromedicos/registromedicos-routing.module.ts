import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistromedicosPage } from './registromedicos.page';

const routes: Routes = [
  {
    path: '',
    component: RegistromedicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistromedicosPageRoutingModule {}
