import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReviewSliderComponent } from '../components/review-slider/review-slider.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-prestations',
  standalone: true,
  imports: [SharedModule, ReviewSliderComponent],
  templateUrl: './prestations.component.html',
  styleUrl: './prestations.component.scss',
})
export class PrestationsComponent implements OnInit {
  // Images path strings
  logoWithoutTitle = 'logo-without-title';
  presta1 = 'presta1';
  presta2 = 'presta2';
  presta3 = 'presta3';
  presta4 = 'presta4';
  prestationBg = 'prestation-bg';
  reviewsBg = 'reviews-bg';

  showDetails1: boolean = false;
  showDetails2: boolean = false;
  showDetails3: boolean = false;

  constructor(
    private meta: Meta,
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.titleService.setTitle('Coeur Sauvage - Prestations');

    // Standard Meta Tags
    this.meta.addTag({
      name: 'description',
      content:
        "Je propose des séances d'accompagnement spirituel, de la guidance simple et des soins énergétiques personalisés",
    });
    this.meta.addTag({
      name: 'keywords',
      content:
        'Energeticienne, Toulouse, Camille, Coeur Sauvage, Coeur, Sauvage, prestations',
    });

    // Open Graph Meta Tags
    this.meta.addTag({
      property: 'og:title',
      content: 'Coeur Sauvage - Prestations',
    });
    this.meta.addTag({
      property: 'og:description',
      content:
        "Ici, je t'accompagne pour te reconnecter à ton essence profonde et explorer ce qui te passionne vraiment.\n" +
        'Que tu sois en quête de toi-même ou que tu souhaites simplement mieux te connaître, cet espace est ton refuge.\n' +
        "Ensemble, découvrons ta véritable nature et avançons vers une vie pleine de liberté, de joie et d'authenticité.",
    });
    // this.meta.addTag({
    //   property: 'og:image',
    //   content: '../assets/images/coeur-sauvage-meta-img.png',
    // });
  }

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
