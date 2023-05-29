import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnemiaPageRoutingModule } from './anemia-routing.module';

import { AnemiaPage } from './anemia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnemiaPageRoutingModule
  ],
  declarations: [AnemiaPage]
})
export class AnemiaPageModule {}
