import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityHomeMaterialModule } from './community-home-material.module';
import { CommunityHomeComponent } from './community-home.component';
import { CommunityHomeRoutingModule } from './community-home-routing.module';
import { ThreadsTableComponent } from './components/threads-table/threads-table.component';
import { HttpClientModule } from '@angular/common/http';
import { NodesCategoryPickerComponent } from './components/nodes-category-picker/nodes-category-picker.component';
import { FastNavigationListComponent } from './components/fast-navigation-list/fast-navigation-list.component';

@NgModule({
  declarations: [
    CommunityHomeComponent,
    ThreadsTableComponent,
    NodesCategoryPickerComponent,
    FastNavigationListComponent,
  ],
  imports: [
    CommonModule,
    CommunityHomeMaterialModule,
    CommunityHomeRoutingModule,
    HttpClientModule,
  ],
})
export class CommunityHomeModule {}
