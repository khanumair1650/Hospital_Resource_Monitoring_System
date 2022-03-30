import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmingreetPageRoutingModule } from './admingreet-routing.module';

import { AdmingreetPage } from './admingreet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmingreetPageRoutingModule
  ],
  declarations: [AdmingreetPage]
})
export class AdmingreetPageModule {}
