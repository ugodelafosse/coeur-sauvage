import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage, SharedModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  // Images path strings
  logoWithTitle = 'logo-with-title';

  goTo(url: string): void {
    window.open(url, '_blank');
  }
}
