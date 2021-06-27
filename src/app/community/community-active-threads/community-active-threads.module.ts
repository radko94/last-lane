import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityActiveThreadsComponent } from './community-active-threads.component';
import { CommunityActiveThreadsMaterialModule } from './community-active-threads-material.module';
import { CommunityActiveThreadsRoutingModule } from './community-active-threads-routing.module';

@NgModule({
  declarations: [CommunityActiveThreadsComponent],
  imports: [
    CommonModule,
    CommunityActiveThreadsMaterialModule,
    CommunityActiveThreadsRoutingModule,
  ],
})
export class CommunityActiveThreadsModule {}
