import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [MainComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactsComponent],
  imports: [CommonModule, MainRoutingModule],
  exports: [MainComponent],
})
export class MainModule {}
