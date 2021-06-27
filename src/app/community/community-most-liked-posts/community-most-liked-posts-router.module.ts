import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityMostLikedPostsComponent } from './community-most-liked-posts.component';

const communityMostLikedPosts: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CommunityMostLikedPostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(communityMostLikedPosts)],
  exports: [RouterModule],
})
export class CommunityMostLikedPostsRoutingModule {}
