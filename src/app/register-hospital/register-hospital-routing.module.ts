import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterHospitalPage } from './register-hospital.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterHospitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterHospitalPageRoutingModule {}
