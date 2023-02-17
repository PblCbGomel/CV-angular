import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  hardSkills: String[];
  softSkills: String[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/skills.json').subscribe({
      next: (data: any) => {
        this.hardSkills = data['hardSkills'];
        this.softSkills = data['softSkills'];
      },
    });
  }
}
