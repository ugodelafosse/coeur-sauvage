import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'acceuil',
    pathMatch: 'full',
  },
  {
    path: 'acceuil',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  // {
  //   path: '404',
  //   loadChildren: () =>
  //     import('./app/page-not-found/page-not-found-routes').then(
  //       (m) => m.pageNotFoundRoutes
  //     ),
  // },
  // { path: '**', redirectTo: '/404' },
];
