import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SettingsComponent } from './components/header/settings/settings/settings.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ]
})
export class ShareModule { }
