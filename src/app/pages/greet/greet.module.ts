import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreetPageRoutingModule } from './greet-routing.module';

import { GreetPage } from './greet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreetPageRoutingModule
  ],
  declarations: [GreetPage]
})
export class GreetPageModule {}
