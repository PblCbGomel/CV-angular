import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ChangeThemeService } from 'src/app/share/services/change-theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  items: MenuItem[];

  constructor(private themeService: ChangeThemeService) {}

  ngOnInit() {
    this.themeService.themeAfterReloading();
    this.items = [
      {
        label: 'Language',
        icon: 'pi pi-server',
        items: [{ label: 'En' }, { label: 'Rus' }],
      },
      {
        label: 'Theme',
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
