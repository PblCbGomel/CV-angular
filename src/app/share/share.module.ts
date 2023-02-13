import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SettingsComponent } from './components/header/settings/settings.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { NavigationComponent } from './components/header/navigation/navigation.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    NavigationComponent,
  ],
  imports: [CommonModule, ShareRoutingModule, PrimeNGModule],
  exports: [HeaderComponent, FooterComponent, PrimeNGModule],
})
export class ShareModule {}
