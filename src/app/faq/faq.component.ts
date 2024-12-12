import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FAQComponent implements OnInit {
  constructor(
    private meta: Meta,
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.titleService.setTitle(
      'Coeur Sauvage - FAQ - Soins Énergétiques & Guidance Spirituelle',
    );

    // Standard Meta Tags
    this.meta.addTag({
      name: 'description',
      content:
        "Ici, je t'accompagne pour te reconnecter à ton essence profonde et explorer ce qui te passionne vraiment.\n" +
        'Que tu sois en quête de toi-même ou que tu souhaites simplement mieux te connaître, cet espace est ton refuge.\n' +
        "Ensemble, découvrons ta véritable nature et avançons vers une vie pleine de liberté, de joie et d'authenticité.",
    });
    this.meta.addTag({
      name: 'keywords',
      content:
        'Energeticienne, Toulouse, Camille, Coeur Sauvage, Coeur, Sauvage, FAQ, Soins Énergétiques, Guidance Spirituelle',
    });

    // Open Graph Meta Tags
    this.meta.addTag({
      property: 'og:title',
      content:
        'Coeur Sauvage - FAQ - Soins Énergétiques & Guidance Spirituelle',
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
}
