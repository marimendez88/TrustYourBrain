import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent

  ],
  providers: [],
  declarations: [
    HeaderComponent,
  ],
})
export class SharedModule { }
