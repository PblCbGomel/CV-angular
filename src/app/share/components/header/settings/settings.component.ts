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
        label: '1',
        items: [],
      },
      {
        label: '2',
        items: [],
      },
    ];
  }
}
