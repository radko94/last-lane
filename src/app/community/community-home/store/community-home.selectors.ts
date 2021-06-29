import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  communityHomeFeatureKey,
  ICommunityHomeState,
} from './community-home.state';

const selectCommunityHomeFeature = createFeatureSelector<ICommunityHomeState>(
  communityHomeFeatureKey
);

export const selectLatestPosts = createSelector(
  selectCommunityHomeFeature,
  (state: ICommunityHomeState) => state.latestPosts
);

export const selectHotPosts = createSelector(
  selectCommunityHomeFeature,
  (state: ICommunityHomeState) => state.hotPosts
);

export const selectOngoingConversations = createSelector(
  selectCommunityHomeFeature,
  (state: ICommunityHomeState) => state.ongoingConversations
);

export const selectCategories = createSelector(
  selectCommunityHomeFeature,
  (state: ICommunityHomeState) => state.categories
);

export const selectInsidersForum = createSelector(
  selectCommunityHomeFeature,
  (state: ICommunityHomeState) => state.insidersForum
);

export const selectSponsors = createSelector(
  selectCommunityHomeFeature,
  (state: ICommunityHomeState) => state.sponsors
);
