import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ColorSwitcherService {
  isDarkTheme?: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  changeTheme(): void {
    if (this.isDarkTheme) {
      this.document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.document.body.classList.remove('dark');
      localStorage.clear();
    }
  }

  loadTheme(): void {
    const theme = localStorage.getItem('theme');

    if (theme) {
      this.isDarkTheme = true;
      this.changeTheme();
    }
  }
}
