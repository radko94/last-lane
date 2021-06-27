import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityNewMaterialPostModule } from './community-new-post-material.module';
import { CommunityNewPostRoutingModule } from './community-new-post-routing.module';
import { CommunityNewPostComponent } from './community-new-post.component';

@NgModule({
  declarations: [CommunityNewPostComponent],
  imports: [
    CommonModule,
    CommunityNewMaterialPostModule,
    CommunityNewPostRoutingModule,
  ],
})
export class CommunityNewPostModule {}
