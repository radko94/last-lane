import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunityActiveThreadsComponent } from './community-active-threads.component';

const communityActiveThreadsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CommunityActiveThreadsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(communityActiveThreadsRoutes)],
  exports: [RouterModule],
})
export class CommunityActiveThreadsRoutingModule {}
