import { Injectable } from '@angular/core';

@Injectable()
export class ChangeThemeService {
  themeLink = document.getElementById('themeLink') as HTMLLinkElement;

  changeToLight() {
    this.themeLink.href = 'light-theme.css';
    localStorage.setItem('theme', 'light');
  }

  changeToDark() {
    this.themeLink.href = 'dark-theme.css';
    localStorage.setItem('theme', 'dark');
  }

  themeAfterReloading() {
    if (localStorage.getItem('theme') !== null) {
      let themeLink = document.getElementById('themeLink') as HTMLLinkElement;
      themeLink.href =
        localStorage.getItem('theme') + '-theme.css' || 'light-theme.css';
    }
  }
}
