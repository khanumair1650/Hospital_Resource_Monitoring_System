import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreetPage } from './greet.page';

const routes: Routes = [
  {
    path: '',
    component: GreetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreetPageRoutingModule {}
