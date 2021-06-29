import { INavigation, INodesCategory, IShortPost } from '../interfaces';

export const communityHomeFeatureKey = 'communityHomeFeatureKey';

export interface ICommunityHomeState {
  latestPosts: IShortPost[];
  hotPosts: IShortPost[];
  ongoingConversations: INavigation[];
  categories: INodesCategory[];
  insidersForum: INavigation[];
  sponsors: IShortPost[];
}

export const communityHomeInitialState: ICommunityHomeState = {
  latestPosts: null,
  hotPosts: null,
  ongoingConversations: null,
  categories: null,
  insidersForum: null,
  sponsors: null,
};
