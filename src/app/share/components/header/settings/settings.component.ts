import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ChangeThemeService } from 'src/app/share/services/change-theme.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  items: MenuItem[];
  languageSubscription$: Subscription;

  constructor(
    private themeService: ChangeThemeService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang(localStorage.getItem('lang') || 'en-US');
    this.translate.use(localStorage.getItem('lang') || 'en-US');
    this.themeService.themeAfterReloading();
    this.languageSubscription$ = this.translate.onLangChange.subscribe(() => {
      this.items = this.buildSettingsMenu();
    });
  }

  ngOnDestroy(): void {
    this.languageSubscription$.unsubscribe();
  }

  private buildSettingsMenu(): MenuItem[] {
    return [
      {
        label: this.translate.instant('settings.language'),
        icon: 'pi pi-server',
        items: [
          {
            label: 'En',
            command: () => {
              this.translate.use('en-US');
              localStorage.setItem('lang', 'en-US');
            },
          },
          {
            label: 'Rus',
            command: () => {
              this.translate.use('ru-RU');
              localStorage.setItem('lang', 'ru-RU');
            },
          },
        ],
      },
      {
        label: this.translate.instant('settings.theme'),
        items: [
          {
            icon: 'pi pi-sun',
            command: () => {
              this.themeService.changeToLight();
            },
          },
          {
            icon: 'pi pi-moon',
            command: () => {
              this.themeService.changeToDark();
            },
          },
        ],
      },
    ];
  }
}
