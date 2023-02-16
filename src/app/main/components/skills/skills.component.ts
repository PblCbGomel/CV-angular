import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  hardSkills: String[];
  softSkills: String[];

  constructor() {
    this.hardSkills = [
      'HTML5',
      'CSS',
      'SASS',
      'TypeScript',
      'Angular',
      'NgRx',
      'RxJs',
      'Angular Material',
      'PrimeNg',
      'Ng color',
      'Firebase',
      'Web-pack',
    ];

    this.softSkills = [
      'Agile',
      'Scrum',
      'Jira',
      'Trello',
      'Communication',
      'management',
    ];
  }
}
