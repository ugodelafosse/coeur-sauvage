import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
  {
    path: 'accueil',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'prestations',
    loadComponent: () =>
      import('./prestations/prestations.component').then(
        (m) => m.PrestationsComponent,
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./faq/faq.component').then((m) => m.FAQComponent),
  },
  {
    path: 'cgv',
    loadComponent: () =>
      import('./cgv/cgv.component').then((m) => m.CgvComponent),
  },
  // {
  //   path: '404',
  //   loadChildren: () =>
  //     import('./app/page-not-found/page-not-found-routes').then(
  //       (m) => m.pageNotFoundRoutes
  //     ),
  // },
  { path: '**', redirectTo: 'accueil' },
];
