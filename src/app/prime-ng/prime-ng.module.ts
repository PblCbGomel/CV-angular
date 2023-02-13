import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [],
  imports: [CommonModule, PanelModule, ButtonModule, MenuModule],
  exports: [CommonModule, PanelModule, ButtonModule, MenuModule],
})
export class PrimeNGModule {}
