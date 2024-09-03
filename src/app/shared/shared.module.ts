import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterLink, NgOptimizedImage, FontAwesomeModule],
  exports: [CommonModule, RouterLink, NgOptimizedImage, FontAwesomeModule],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faInstagram, faCircle);
  }
}
