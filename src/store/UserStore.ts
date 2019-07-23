import { types, Instance, flow, getSnapshot } from 'mobx-state-tree';

export const UserModel = types.model({
  "id": types.number,
  "name": types.string,
  "username": types.string,
  "email": types.string,
})

export const UserStore = types.model('UserStore', {
  userList: types.array(UserModel),
}).actions(self => ({
  fetchUser: flow(function* (){
    const  usersResponse: any = yield window.fetch('https://jsonplaceholder.typicode.com/users');
    const users = yield usersResponse.json();
    self.userList.replace(users);
    console.log(getSnapshot(self.userList));
  })
}));

export type UserStoreType = Instance<typeof UserStore>