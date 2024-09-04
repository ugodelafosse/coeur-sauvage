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

  @HostListener('window:scroll')
  scrollEvent() {
    window.scrollY >= 20 ? (this.isScrolled = true) : (this.isScrolled = false);
  }

  goTo(url: string): void {
    window.open(url, '_blank');
  }
}
