import { Component, HostListener } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

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

  @HostListener('window:scroll')
  scrollEvent() {
    const st = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = st > this.lastScrollTop;
    this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }

  goTo(url: string): void {
    window.open(url, '_blank');
  }
}
