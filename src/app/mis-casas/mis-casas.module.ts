import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisCasasPageRoutingModule } from './mis-casas-routing.module';

import { MisCasasPage } from './mis-casas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisCasasPageRoutingModule
  ],
  declarations: [MisCasasPage]
})
export class MisCasasPageModule {}
