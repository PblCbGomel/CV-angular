import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/share/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, OnDestroy {
  hardSkills: String[];
  softSkills: String[];
  skillsStream$: Subscription;

  constructor(private http: DataService) {}

  ngOnInit(): void {
    this.skillsStream$ = this.http
      .getData('assets/skills.json')
      .subscribe((data: any) => {
        this.hardSkills = data['hardSkills'];
        this.softSkills = data['softSkills'];
      });
  }

  ngOnDestroy(): void {
    this.skillsStream$.unsubscribe();
  }
}
