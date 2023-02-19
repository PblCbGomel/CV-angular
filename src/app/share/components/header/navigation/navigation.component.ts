import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  items: MenuItem[];
  navStream$: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.navStream$ = this.translate.onLangChange.subscribe(() => {
      this.items = this.buildNavigationMenu();
    });
  }

  ngOnDestroy(): void {
    this.navStream$.unsubscribe();
  }

  private buildNavigationMenu(): MenuItem[] {
    return [
      {
        label: this.translate.instant('navigation.home'),
        icon: 'pi pi-fw pi-home',
        routerLink: 'main',
      },
      {
        label: this.translate.instant('navigation.about'),
        icon: 'pi pi-fw pi-user',
        routerLink: 'about',
      },
      {
        label: this.translate.instant('navigation.skills'),
        icon: 'pi pi-fw pi-sitemap',
        routerLink: 'skills',
      },
      {
        label: this.translate.instant('navigation.projects'),
        icon: 'pi pi-fw pi-folder',
        routerLink: 'projects',
      },
      {
        label: this.translate.instant('navigation.contacts'),
        icon: 'pi pi-fw pi-comments',
        routerLink: 'contacts',
      },
    ];
  }
}
