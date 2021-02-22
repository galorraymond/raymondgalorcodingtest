import { Component, OnInit } from '@angular/core';
import { ColorSwitcherService } from '@shared/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private colorSwitcher: ColorSwitcherService) {}

  ngOnInit(): void {
    this.colorSwitcher.loadTheme();
  }

  changeTheme(): void {
    this.colorSwitcher.isDarkTheme = !this.colorSwitcher.isDarkTheme;
    this.colorSwitcher.changeTheme();
  }
}
