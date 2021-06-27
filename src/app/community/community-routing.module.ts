import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community.component';
import { ECommunityNavigation } from './models/community-navigartion.enum';

const communityRoutes: Routes = [
  {
    path: ECommunityNavigation.HOME,
    children: [
      {
        path: ECommunityNavigation.HOME,
        component: CommunityComponent,
        children: [
          {
            path: ECommunityNavigation.HOME,
            loadChildren: () =>
              import('./community-home/community-home.module').then(
                (module) => module.CommunityHomeModule
              ),
          },
          {
            path: ECommunityNavigation.NEW_POST,
            loadChildren: () =>
              import('./community-new-post/community-new-post.module').then(
                (module) => module.CommunityNewPostModule
              ),
          },
          {
            path: ECommunityNavigation.MOST_VIEWED_THREADS,
            loadChildren: () =>
              import(
                './community-active-threads/community-active-threads.module'
              ).then((module) => module.CommunityActiveThreadsModule),
          },
          {
            path: ECommunityNavigation.MOST_LIKED_POSTS,
            loadChildren: () =>
              import(
                './community-most-liked-posts/community-most-liked-posts.module'
              ).then((module) => module.CommunityMostLikedPostsModule),
          },
          {
            path: ECommunityNavigation.HOT_TOPICS,
            loadChildren: () =>
              import('./community-hot-topics/community-hot-topics.module').then(
                (module) => module.CommunityHotTopicsModule
              ),
          },
          {
            path: ECommunityNavigation.GOLD_THREADS,
            loadChildren: () =>
              import(
                './community-gold-threads/community-gold-threads.module'
              ).then((module) => module.CommunityGoldThreadsModule),
          },
          {
            path: ECommunityNavigation.NOTABLE_THREADS,
            loadChildren: () =>
              import(
                './community-notable-threads/community-notable-threads.module'
              ).then((module) => module.CommunityNotableThreadsModule),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(communityRoutes)],
  exports: [RouterModule],
})
export class CommunityRoutingModule {}
