import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmingreetPage } from './admingreet.page';

const routes: Routes = [
  {
    path: '',
    component: AdmingreetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmingreetPageRoutingModule {}
