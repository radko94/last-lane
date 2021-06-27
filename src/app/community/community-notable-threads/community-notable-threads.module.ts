import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityNotableThreadsMaterialModule } from './community-notable-threads-material.module';
import { CommunityNotableThreadsRoutingModule } from './community-notable-threads-routing.module';
import { CommunityNotableThreadsComponent } from './community-notable-threads.component';

@NgModule({
  declarations: [
    CommunityNotableThreadsComponent
  ],
  imports: [
    CommonModule,
    CommunityNotableThreadsMaterialModule,
    CommunityNotableThreadsRoutingModule,
  ],
})
export class CommunityNotableThreadsModule {}
