import { HomeRootPage } from './pages/home-root/home-root.page';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule,
  ],
  exports: [
    MenuComponent
  ],
  declarations: [MenuComponent, HomeRootPage]
})
export class HomeModule {}
