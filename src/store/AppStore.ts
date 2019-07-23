import { types, Instance } from 'mobx-state-tree';

import { PostStore } from './PostStore';
import { UserStore } from './UserStore';

export const AppStore = types.model('AppStore', {
  postStore: types.optional(PostStore, {
    posts: [],
  }),
  userStore: types.optional(UserStore, {
    userList: []
  })
});

export type AppStoreType = Instance<typeof AppStore>;
