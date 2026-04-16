import { Component, Input, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ds-navbar',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '[class.sticky]': 'isSticky',
  },
})
export class DsNavbarComponent {
  @Input() brand = '';
  @Input() sticky = true;

  isSticky = false;
  activeMenu: string | null = null;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isSticky = this.sticky && window.scrollY > 0;
  }

  toggleMenu(name: string): void {
    this.activeMenu = this.activeMenu === name ? null : name;
  }

  closeMenu(): void {
    this.activeMenu = null;
  }
}
