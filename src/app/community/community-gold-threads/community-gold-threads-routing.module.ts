import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunityGoldThreadsComponent } from './community-gold-threads.component';

const communityGoldThreadsRouting: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CommunityGoldThreadsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(communityGoldThreadsRouting)],
  exports: [RouterModule],
})
export class CommunityGoldThreadsRoutingModule {}
