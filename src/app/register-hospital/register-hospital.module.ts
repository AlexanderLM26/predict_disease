import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterHospitalPageRoutingModule } from './register-hospital-routing.module';

import { RegisterHospitalPage } from './register-hospital.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RegisterHospitalPageRoutingModule
  ],
  declarations: [RegisterHospitalPage]
})
export class RegisterHospitalPageModule {}
