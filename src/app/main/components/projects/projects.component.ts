import { Component } from '@angular/core';
import { Project } from './project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[];

  constructor() {
    this.projects = [
      {
        name: 'Project 1',
        link: 'https://edufpmi.bsu.by/login/index.php',
        img: 'https://edufpmi.bsu.by/pluginfile.php/1/theme_moove/logo/1662616236/logoblue.png',
        description: 'my first project',
      },
      {
        name: 'Project 1',
        link: 'https://edufpmi.bsu.by/login/index.php',
        img: 'https://edufpmi.bsu.by/pluginfile.php/1/theme_moove/logo/1662616236/logoblue.png',
        description: 'my first project',
      },
      {
        name: 'Project 1',
        link: 'https://edufpmi.bsu.by/login/index.php',
        img: 'https://edufpmi.bsu.by/pluginfile.php/1/theme_moove/logo/1662616236/logoblue.png',
        description: 'my first project',
      },
      {
        name: 'Project 1',
        link: 'https://edufpmi.bsu.by/login/index.php',
        img: 'https://edufpmi.bsu.by/pluginfile.php/1/theme_moove/logo/1662616236/logoblue.png',
        description: 'my first project',
      },
      {
        name: 'Project 1',
        link: 'https://edufpmi.bsu.by/login/index.php',
        img: 'https://edufpmi.bsu.by/pluginfile.php/1/theme_moove/logo/1662616236/logoblue.png',
        description: 'my first project',
      },
    ];
  }

  toProject(link: string): void {
    window.location.href = link;
  }
}
