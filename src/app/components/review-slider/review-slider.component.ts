import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import Swiper from 'swiper';

@Component({
  selector: 'app-review-slider',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './review-slider.component.html',
  styleUrl: './review-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReviewSliderComponent implements AfterViewInit {
  swiper: Swiper | undefined;

  reviews = [
    {
      name: 'Audrey',
      text:
        '« J’ai bénéficié d’une guidance spirituelle avec Camille et j’ai été bluffée par ses canalisations si justes et totalement adaptées à ma vie et à ma situation. Elle m’a donné des réponses précises, m’a aidée à y voir plus clair et à éclairer mon chemin.\n' +
        '\n' +
        'Tout cela avec le sourire et de la bonne humeur ! Je la recommande ! »',
    },
    {
      name: 'Adrien, Toulouse',
      text: '« Un soin de qualité duquel je suis sorti léger ! Toujours dans une attitude douce et bienveillante, Camille sait prendre le temps et mettre en confiance. Je recommande ++ merci encore »',
    },
    {
      name: 'Alexandre, Toulouse',
      text: "« Expérience très professionnelle, Camille est à l'écoute et totalement concentrée sur le moment présent avec vous. Je recommande vivement pour apaiser son âme ! »",
    },
    // {
    //   name: 'Lucie, Toulouse',
    //   text:
    //     '“Petit retour sur un soin énergétique prodiguer par un véritable petit tournesol!' +
    //     '</br>' +
    //     'C’est le deuxième que j’ai effectué avec elle, et mon ressenti après être sortie de la séance c’est de la délivrance alors que j’avais le cœur et le corps lourd j’ai eu un sentiment de légèreté, je ne peux vous décrire précisément tout ce que j’ai pu ressentir à part du bien fait!' +
    //     '</br>' +
    //     'C’est une personne douce, calme et très prévoyante, qui adore son travail et se soucis du bien des autres!' +
    //     '</br>' +
    //     'Je recommande vivement à toutes les personnes qui se sentent perdus, qui n’ont plus aucune motivation ou l’envie de rien ou autre, allez la voir elle vous redonneras toute l’énergie positive possible !' +
    //     '</br>' +
    //     'Encore merci à toi de m’avoir libéré 🌻”',
    // },
    {
      name: 'Aurélie, Bordeaux',
      text: "« Wow, t'aurais pas pu faire plus juste sur ma situation c'est fou ! Merci pour la guidance :) »",
    },
    {
      name: 'Karine, Angers',
      text: "« Coucou Camille. Merci pour ta guidance :) A mon avis, le déblocage c'est pour le travail ! T'es trop super, Merci. »",
    },
    {
      name: 'Thibaut, Paris',
      text: "« Coucou Camille. Je voulais que tu saches, les conseils que tu m'as donné lors du soin ont été hyper utiles, je suis vraiment en phase avec moi-même en ce moment et c'est cooooooool ahah. Je peux aussi te dire que la guidance spirituelle m'a permis de reprendre confiance en l'avenir. Quoi qu'il arrive, l'avenir est radieux lorsqu'on y croit et qu'on met coeur et âme pour ses projets. Et ça c'est chouette, ahah. »",
    },
    {
      name: 'Karine, Toulouse',
      text: "« Merciiii pour cet instant de soin très agréable, et très intéressant aussi car j'ai appris beaucoup de de choses (même si je n'ai pas tout retenu). En tout cas j'ai kiffé ! J'en ai même perdu mes clés de maison, très bizarre c'est la 1ère fois que ça m'arrive. Je crois que j'étais dans un état un peu second en sortant de ta séance ! En tout cas ce matin, comme une sensation de respirer plus librement... Merci. »",
    },
    {
      name: 'Pierre, Toulouse',
      text: "« Quelle belle découverte ! Je suis vraiment ravie d'avoir reçu le bilan/soin énergétique de Camille. Le protocole est vraiment complet, Camille prend réellement le temps de bien faire les choses et ne fait l'impasse sur aucun détail. Je me sens revitalisé et reviendrai sans hésitation pour une séance de suivi. Merci Camille. »",
    },
    {
      name: 'Catherine, Toulouse',
      text: '« Le soin énergétique de Camille m’a fait beaucoup de bien. Il m’a aidé à retrouver un équilibre au moment où j’en avais besoin. »',
    },
    {
      name: 'Line, Paris',
      text: "« J'ai fait la belle découverte de cette belle âme Camille. Soin +++ ça m'a fait énormément de bien elle m'a beaucoup apaisée. Elle est douce et si bienveillante. Je recommande !! »",
    },
    {
      name: 'Anna, Rodez',
      text: "« Camille est très a l'écoute, douce et investie pour trouver des solutions. Elle m'a fait un soin énergétique, après lequel je me suis sentie beaucoup plus apaisée et moins stressée comme sur un nuage. »",
    },
    // {
    //   name: 'Clément, Toulouse',
    //   text: '« Et bonjour ! 😊 Par rapport à la séance tout était parfait, tu m’as tout bien expliqué par rapport au déroulement et aux étapes que nous allions faire ensemble. Tu m’as dit tout ce qu’il y avait à savoir sur notre existence sur terre et comment l’énergie circulait en nous, suivant les différents formes d’énergie que nous avons autour de notre enveloppe charnelle. On a travaillé sur des points qui me concernaient vraiment, ce qui m’a aussi donné envie d’avancer et de travailler là dessus même de mon côté pour ne pas me laisser envahir par certaines mauvaises pensées ou énergies qui pourraient me traverser. Je me suis senti détendu du début à la fin et encore plus léger quand je suis parti 😊. Merci encore pour cette séance. Gros bisous à toi 😘»',
    // },
    {
      name: 'Amandine, Toulouse',
      text: '« Le soin énergétique de Camille m’a fait beaucoup de bien. Il m’a aidé à retrouver un équilibre au moment où j’en avais besoin »',
    },
    {
      name: 'Romane, Marseille',
      text: "« Camille m'a fait un soin énergétique qui m'a beaucoup apaisé. Elle est très à l'écoute, douce, et prends le temps de faire un bilan complet. Je me suis tout de suite sentie en confiance ! Je me suis sentie beaucoup mieux après et je commence déjà à sentir les bénéfices sur le long terme !! Je recommande++ »",
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 50,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  }
}
