import { createAction, props } from '@ngrx/store';
import { INavigation, INodesCategory, IShortPost } from '../interfaces';

// Latest Posts
export const getLatestPostsAction = createAction(
  '[COMMUNITY_HOME] GET_LATEST_POSTS_ACTION'
);

export const getLatestPostsSuccess = createAction(
  '[COMMUNITY_HOME] GET_LATEST_POSTS_SUCCESS',
  props<{ payload: { latestPosts: IShortPost[] } }>()
);

// Hot Posts
export const getHotPostsAction = createAction(
  '[COMMUNITY_HOME] GET_HOT_POSTS_ACTION'
);

export const getHotPostsSuccess = createAction(
  '[COMMUNITY_HOME] GET_HOT_POSTS_SUCCESS',
  props<{ payload: { hotPosts: IShortPost[] } }>()
);

// Ongoing conversations
export const getOngoingConversationsAction = createAction(
  '[COMMUNITY_HOME] GET_ONGOING_CONVERSATIONS_ACTION'
);

export const getOngoingConversationsSuccess = createAction(
  '[COMMUNITY_HOME] GET_ONGOING_CONVERSATIONS_SUCCESS',
  props<{ payload: { ongoingConversations: INavigation[] } }>()
);

// Categories
export const getCategoriesAction = createAction(
  '[COMMUNITY_HOME] GET_CATEGORIES_ACTION'
);

export const getCategoriesSuccess = createAction(
  '[COMMUNITY_HOME] GET_CATEGORIES_SUCCESS',
  props<{ payload: { categories: INodesCategory[] } }>()
);

// Insiders forum
export const getInsidersForumAction = createAction(
  '[COMMUNITY_HOME] GET_INSIDERS_FORUM_ACTION'
);

export const getInsidersForumSuccess = createAction(
  '[COMMUNITY_HOME] GET_INSIDERS_FORUM_SUCCESS',
  props<{ payload: { insidersForum: INavigation[] } }>()
);

export const getSponsorsAction = createAction(
  '[COMMUNITY_HOME] GET_SPONSORS_ACTION'
);
export const getSponsorsSuccess = createAction(
  '[COMMUNITY_HOME] GET_SPONSORS_SUCCESS',
  props<{ payload: { sponsors: IShortPost[] } }>()
);
