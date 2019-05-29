import { types, Instance } from 'mobx-state-tree';

import { PostStore } from './PostStore';

export const AppStore = types.model('AppStore', {
  postStore: types.optional(PostStore, {
    posts: [],
  })
});

export type AppStoreType = Instance<typeof AppStore>;
