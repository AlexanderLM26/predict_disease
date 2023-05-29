import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancerPulmonarPageRoutingModule } from './cancer-pulmonar-routing.module';

import { CancerPulmonarPage } from './cancer-pulmonar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancerPulmonarPageRoutingModule
  ],
  declarations: [CancerPulmonarPage]
})
export class CancerPulmonarPageModule {}
