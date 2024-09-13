import { Component, HostListener } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isScrolled: boolean = false;
  lastScrollTop: number = 0;
  isNavOpen = false;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll')
  scrollEvent() {
    const st = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = st > this.lastScrollTop;
    this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }

  goTo(url: string): void {
    window.open(url, '_blank');
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    if (this.isNavOpen) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.setStyle(document.body, 'overflow', 'auto');
    }
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
      hamburger.classList.toggle('active');
    }
  }
}
