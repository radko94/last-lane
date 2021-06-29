import { createReducer, on } from '@ngrx/store';

import { communityHomeInitialState } from './community-home.state';

import * as actions from './community-home.actions';

export const communityHomeReducer = createReducer(
  communityHomeInitialState,
  on(actions.getInsidersForumSuccess, (state, action) => ({
    ...state,
    insidersForum: action.payload.insidersForum,
  })),
  on(actions.getLatestPostsSuccess, (state, action) => ({
    ...state,
    latestPosts: action.payload.latestPosts,
  })),
  on(actions.getCategoriesSuccess, (state, action) => ({
    ...state,
    categories: action.payload.categories,
  })),
  on(actions.getHotPostsSuccess, (state, action) => ({
    ...state,
    hotPosts: action.payload.hotPosts,
  })),
  on(actions.getOngoingConversationsSuccess, (state, action) => ({
    ...state,
    ongoingConversations: action.payload.ongoingConversations,
  })),
  on(actions.getSponsorsSuccess, (state, action) => ({
    ...state,
    sponsors: action.payload.sponsors,
  }))
);
