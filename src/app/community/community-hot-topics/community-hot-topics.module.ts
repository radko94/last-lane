import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityHotTopicsMaterialModule } from './community-hot-topics-material.module';
import { CommunityHotTopicsRoutingModule } from './community-hot-topics-routing.module';
import { CommunityHotTopicsComponent } from './community-hot-topics.component';

@NgModule({
  declarations: [CommunityHotTopicsComponent],
  imports: [
    CommonModule,
    CommunityHotTopicsMaterialModule,
    CommunityHotTopicsRoutingModule,
  ],
})
export class CommunityHotTopicsModule {}
