import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityMaterialModule } from './community-material.module';
import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community.component';

@NgModule({
  declarations: [CommunityComponent],
  imports: [CommonModule, CommunityMaterialModule, CommunityRoutingModule],
})
export class CommunityModule {}
