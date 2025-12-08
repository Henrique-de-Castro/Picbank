import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./page/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./page/create/create.module').then((m) => m.CreateModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
