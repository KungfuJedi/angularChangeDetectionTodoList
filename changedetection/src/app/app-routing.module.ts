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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
