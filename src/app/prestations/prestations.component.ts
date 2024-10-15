import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReviewSliderComponent } from '../components/review-slider/review-slider.component';

@Component({
  selector: 'app-prestations',
  standalone: true,
  imports: [SharedModule, ReviewSliderComponent],
  templateUrl: './prestations.component.html',
  styleUrl: './prestations.component.scss',
})
export class PrestationsComponent {
  showDetails1: boolean = false;
  showDetails2: boolean = false;
  showDetails3: boolean = false;

  goTo(url: string): void {
    window.open(url, '_blank');
  }

  toggleDetails(index: number): void {
    if (index === 1) {
      this.showDetails1 = !this.showDetails1;
      this.showDetails2 = false;
      this.showDetails3 = false;
    } else if (index === 2) {
      this.showDetails2 = !this.showDetails2;
      this.showDetails1 = false;
      this.showDetails3 = false;
    } else if (index === 3) {
      this.showDetails3 = !this.showDetails3;
      this.showDetails1 = false;
      this.showDetails2 = false;
    }
  }
}
