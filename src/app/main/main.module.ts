import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { SkillComponent } from './components/skills/skill/skill.component';

@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactsComponent,
    SkillComponent,
  ],
  imports: [CommonModule, MainRoutingModule, PrimeNGModule],
  exports: [MainComponent],
})
export class MainModule {}
