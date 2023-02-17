import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from './project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/projects.json').subscribe((data: any) => {
      this.projects = data['projects'];
    });
  }

  toProject(link: string): void {
    window.location.href = link;
  }
}
