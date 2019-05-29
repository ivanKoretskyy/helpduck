import { types, Instance, flow, getSnapshot } from 'mobx-state-tree';

export const Post = types.model({
  userId: types.number,
  id: types.number,
  title: types.string,
  body: ''
})

export const PostStore = types.model('PostStore', {
  posts: types.array(Post)
}).actions(self => ({
  fetchPosts: flow(function* () {
    const postsResponse: any = yield window.fetch('https://jsonplaceholder.typicode.com/posts');
    const posts =  yield postsResponse.json();
    self.posts.replace(posts)
    console.log(getSnapshot(self.posts))
  }),
}))

export type PostStoreType = Instance<typeof PostStore>;