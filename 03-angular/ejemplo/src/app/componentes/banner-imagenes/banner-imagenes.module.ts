import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerImagenesComponent } from './banner-imagenes/banner-imagenes.component';



@NgModule({
  declarations: [
    BannerImagenesComponent
  ],
  imports: [
    CommonModule
  ],
  //Los componentes del modulo que queremos exportar
  exports: [
    BannerImagenesComponent
  ]
})
export class BannerImagenesModule { }
