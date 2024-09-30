import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-prestations',
  standalone: true,
  imports: [NgOptimizedImage, FaIconComponent],
  templateUrl: './prestations.component.html',
  styleUrl: './prestations.component.scss',
})
export class PrestationsComponent {
  goTo(url: string): void {
    window.open(url, '_blank');
  }
}
