import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainRootPage } from './pages/main-root/main-root.page';

const routes: Routes = [
  {
    path: '',
    component: MainRootPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
