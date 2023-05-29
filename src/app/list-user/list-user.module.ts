import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListUserPageRoutingModule } from './list-user-routing.module';

import { ListUserPage } from './list-user.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ListUserPageRoutingModule
  ],
  declarations: [ListUserPage]
})
export class ListUserPageModule {}
