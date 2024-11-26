import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  // Images path strings
  logoWithTitle = 'logo-with-title';
  logoWithoutTitle = 'logo-without-title';
  landingImage = 'landing-image';
  profile = 'profile';
  profileBg = 'profile-bg';
  projectBg = 'project-bg';

  constructor(
    private meta: Meta,
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.titleService.setTitle('Coeur Sauvage - Accueil');

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
        'Energeticienne, Toulouse, Camille, Coeur Sauvage, Coeur, Sauvage, Accueil',
    });

    // Open Graph Meta Tags
    this.meta.addTag({
      property: 'og:title',
      content: 'Coeur Sauvage - Accueil',
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
