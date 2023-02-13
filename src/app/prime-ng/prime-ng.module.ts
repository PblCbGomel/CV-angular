import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { PrimeIcons } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [CommonModule, PanelModule, PrimeIcons],
  exports: [PanelModule, PrimeIcons],
})
export class PrimeNGModule {}
