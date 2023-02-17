import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/share/services/data.service';
import { Project } from './project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Project[];
  projectsData$: Subscription;

  constructor(private http: DataService) {}

  ngOnInit(): void {
    this.projectsData$ = this.http
      .getData('assets/projects.json')
      .subscribe((data: any) => {
        this.projects = data['projects'];
      });
  }

  ngOnDestroy(): void {
    this.projectsData$.unsubscribe();
  }

  toProject(link: string): void {
    window.location.href = link;
  }
}
