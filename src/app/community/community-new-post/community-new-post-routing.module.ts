import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunityNewPostComponent } from './community-new-post.component';

const communityNewPostRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CommunityNewPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(communityNewPostRoutes)],
  exports: [RouterModule],
})
export class CommunityNewPostRoutingModule {}
