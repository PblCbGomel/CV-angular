import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
    MenuModule,
    TabMenuModule,
    ImageModule,
  ],
  exports: [PanelModule, ButtonModule, MenuModule, TabMenuModule, ImageModule],
})
export class PrimeNGModule {}
