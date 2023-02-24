import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
  visibleNum: number;

  constructor(private http: DataService, private translate: TranslateService) {
    this.visibleNum = window.screen.width > 720 ? 3 : 2;
  }

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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.visibleNum = event.target.innerWidth > 720 ? 3 : 2;
  }

  public currentLanguageIsEn(): boolean {
    return this.translate.currentLang === 'en-US';
  }

  public toProject(link: string): void {
    window.open(link, '_blank');
  }
}
