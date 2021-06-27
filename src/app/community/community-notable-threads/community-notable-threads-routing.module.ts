import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunityNotableThreadsComponent } from './community-notable-threads.component';

const communityNotableThreads: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CommunityNotableThreadsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(communityNotableThreads)],
  exports: [RouterModule],
})
export class CommunityNotableThreadsRoutingModule {}
