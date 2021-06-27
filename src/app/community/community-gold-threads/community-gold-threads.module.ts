import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityGoldThreadsComponent } from './community-gold-threads.component';
import { CommunityGoldThreadsMaterialModule } from './community-gold-threads-material.module';
import { CommunityGoldThreadsRoutingModule } from './community-gold-threads-routing.module';

@NgModule({
  declarations: [CommunityGoldThreadsComponent],
  imports: [
    CommonModule,
    CommunityGoldThreadsMaterialModule,
    CommunityGoldThreadsRoutingModule,
  ],
})
export class CommunityGoldThreadsModule {}
