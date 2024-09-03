import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgOptimizedImage, FontAwesomeModule],
  exports: [CommonModule, NgOptimizedImage, FontAwesomeModule],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faInstagram);
  }
}
