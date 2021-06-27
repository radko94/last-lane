import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityHomeMaterialModule } from './community-home-material.module';
import { CommunityHomeComponent } from './community-home.component';
import { CommunityHomeRoutingModule } from './community-home-routing.module';

@NgModule({
  declarations: [CommunityHomeComponent],
  imports: [
    CommonModule,
    CommunityHomeMaterialModule,
    CommunityHomeRoutingModule,
  ],
})
export class CommunityHomeModule {}
