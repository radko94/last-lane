import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityMostLikedPostsComponent } from './community-most-liked-posts.component';
import { CommunityMostLikedPostsMaterialModule } from './community-most-liked-posts-material.module';
import { CommunityMostLikedPostsRoutingModule } from './community-most-liked-posts-router.module';

@NgModule({
  declarations: [CommunityMostLikedPostsComponent],
  imports: [
    CommonModule,
    CommunityMostLikedPostsMaterialModule,
    CommunityMostLikedPostsRoutingModule,
  ],
})
export class CommunityMostLikedPostsModule {}
