import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [],
  imports: [CommonModule, PanelModule, ButtonModule, MenuModule, TabMenuModule],
  exports: [PanelModule, ButtonModule, MenuModule, TabMenuModule],
})
export class PrimeNGModule {}
