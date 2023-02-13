import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  items: MenuItem[];
  styles: object;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'main' },
      { label: 'About me', icon: 'pi pi-fw pi-user', routerLink: 'about' },
      { label: 'Skills', icon: 'pi pi-fw pi-sitemap', routerLink: 'skills' },
      { label: 'Projects', icon: 'pi pi-fw pi-folder', routerLink: 'projects' },
      {
        label: 'Contacts',
        icon: 'pi pi-fw pi-comments',
        routerLink: 'contacts',
      },
    ];
  }
}
