import * as React from 'react';

import s from './UserList.module.scss';
import { observer, inject } from 'mobx-react';
import { AppStoreType } from '../../store/AppStore';

export interface UserListProps {
  
}

export interface UserListWithStore {
  appStore?: AppStoreType,
}
 
export interface UserListState {
  title: string;
}
 
class UserListComponent extends React.Component<UserListProps & UserListWithStore, UserListState> {
  state = { title: 'User List' };
  
  componentDidMount(){
    this.props.appStore!.userStore.fetchUsers();
  }

  render() {
    const users = this.props.appStore!.userStore.users;
    return (
      <div>
        <span className={s.userListContainer}>{this.state.title}</span>
        {users.map(user => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    );
  }
}
 
export const UserList = inject('appStore')(observer(UserListComponent));