import * as React from 'react';

import s from './PostList.module.scss';

export interface PostListProps {
  posts: any[]  
}
 
export interface PostListState {
  title: string;
}
 
export class PostList extends React.Component<PostListProps, PostListState> {
  state = { title: 'Post List' }
  render() { 
    return (
      <div>
        <div className={s.postList}>post list</div>
        {this.props.posts.map(post => (
          <div>{post.title}</div>
        ))}
      </div>
    );
  }
}
