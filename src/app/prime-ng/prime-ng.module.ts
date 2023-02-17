import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
    MenuModule,
    TabMenuModule,
    ImageModule,
    CarouselModule,
  ],
  exports: [
    PanelModule,
    ButtonModule,
    MenuModule,
    TabMenuModule,
    ImageModule,
    CarouselModule,
  ],
})
export class PrimeNGModule {}
