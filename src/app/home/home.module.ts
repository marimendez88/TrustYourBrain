import { QuickStartModalComponent } from './components/quickStartModalComponent/quick-start-modal.component';
import { HomeRootPage } from './pages/home-root/home-root.page';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
    MenuComponent, 
    QuickStartModalComponent
  ],
  declarations: [MenuComponent, HomeRootPage, QuickStartModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomeModule {}
