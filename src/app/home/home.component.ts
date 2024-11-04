import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, NgOptimizedImage, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // Images path strings
  logoWithTitle = 'logo-with-title';
  logoWithoutTitle = 'logo-without-title';
  landingImage = 'landing-image';
  profile = 'profile';
  profileBg = 'profile-bg';
  projectBg = 'project-bg';
}
