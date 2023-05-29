import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizacionPdfPageRoutingModule } from './visualizacion-pdf-routing.module';

import { VisualizacionPdfPage } from './visualizacion-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizacionPdfPageRoutingModule
  ],
  declarations: [VisualizacionPdfPage]
})
export class VisualizacionPdfPageModule {}
