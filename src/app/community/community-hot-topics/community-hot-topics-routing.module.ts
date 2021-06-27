import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunityHotTopicsComponent } from './community-hot-topics.component';

const communityHotTopicsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CommunityHotTopicsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(communityHotTopicsRoutes)],
  exports: [RouterModule],
})
export class CommunityHotTopicsRoutingModule {}
