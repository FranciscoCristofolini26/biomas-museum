import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  navItems = [
    { path: '/', label: 'Início', exact: true },
    { path: '/caracterizacao', label: 'Caracterização' },
    { path: '/biodiversidade', label: 'Biodiversidade' },
    { path: '/impactos', label: 'Impactos' },
    { path: '/quiz', label: 'Quiz' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }
}
