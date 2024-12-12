import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withInMemoryScrolling,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { customCloudinaryLoader } from './custom-cloudinary-loader';
import { IMAGE_LOADER } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      }),
      withPreloading(PreloadAllModules),
    ),
    provideClientHydration(),
    {
      provide: IMAGE_LOADER,
      useValue: customCloudinaryLoader,
    },
  ],
};
