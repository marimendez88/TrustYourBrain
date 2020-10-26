import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRootPage } from './pages/home-root/home-root.page';

const routes: Routes = [
  {
    path: '',
    component: HomeRootPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
