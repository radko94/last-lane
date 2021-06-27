import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunityHomeComponent } from './community-home.component';

const communityHomeRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CommunityHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(communityHomeRoutes)],
  exports: [RouterModule],
})
export class CommunityHomeRoutingModule {}
