import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Language',
        icon: 'pi pi-server',
        items: [{ label: 'En' }, { label: 'Rus' }],
      },
      {
        label: 'Theme',
        items: [{ icon: 'pi pi-sun' }, { icon: 'pi pi-moon' }],
      },
    ];
  }
}
