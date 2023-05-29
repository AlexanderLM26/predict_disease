import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistromedicosPageRoutingModule } from './registromedicos-routing.module';

import { RegistromedicosPage } from './registromedicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistromedicosPageRoutingModule
  ],
  declarations: [RegistromedicosPage]
})
export class RegistromedicosPageModule {}
