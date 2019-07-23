import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  private isMobileMenuActive = false;

  constructor() {
  }

  public ngOnInit(): void {
  }

  public handleActivateMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

  public handleNavigation(): void {
    this.isMobileMenuActive = false;

    window.scrollTo({
      top: 0,
      left: 0
    });
  }

}
