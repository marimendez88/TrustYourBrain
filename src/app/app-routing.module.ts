import { URLHelpers } from './models/helpers.model';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: URLHelpers.HOME,
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: URLHelpers.HOME,
    pathMatch: 'full'
  }, 
  {
    path: URLHelpers.MAIN,
    loadChildren: () => import('./main/main.module').then( m => m.MainModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
