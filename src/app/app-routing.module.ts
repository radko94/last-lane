import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'community',
    loadChildren: () =>
      import('./community/community.module').then(
        (module) => module.CommunityModule
      ),
  },
  {
    path: '**',
    redirectTo: 'community'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
