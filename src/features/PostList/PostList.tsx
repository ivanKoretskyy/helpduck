import * as React from 'react';

import s from './PostList.module.scss';
import { inject, observer } from 'mobx-react';
import { AppStoreType } from '../../store/AppStore';

export interface PostListProps {
  posts?: any[]  
}

export interface PostListWithStore {
  appStore?: AppStoreType,
}
 
export interface PostListState {
  title: string;
}
 
class PostListComponent extends React.Component<PostListWithStore & PostListProps, PostListState> {
  state = { title: 'Post List' }

  componentDidMount(){
    this.props.appStore!.postStore.fetchPosts();
  }

  render() {
    const { posts, postCount} = this.props.appStore!.postStore;

    return (
      <div>
        <div className={s.postList}>Posts: {postCount}</div>
        {posts.map(post => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    );
  }
}

export const PostList = inject('appStore')(observer(PostListComponent))
