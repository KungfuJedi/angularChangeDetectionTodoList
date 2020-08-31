import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./default/default.module').then((m) => m.DefaultModule),
  },
  {
    path: 'onpush',
    loadChildren: () =>
      import('./onpush/onpush.module').then((m) => m.OnpushModule),
  },
  {
    path: 'observable',
    loadChildren: () =>
      import('./onpushobservable/onpushobservable.module').then(
        (m) => m.OnpushobservableModule
      ),
  },
  {
    path: 'distinct',
    loadChildren: () =>
      import('./onpushobservabledistinct/onpushobservabledistinct.module').then(
        (m) => m.OnpushobservabledistinctModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
