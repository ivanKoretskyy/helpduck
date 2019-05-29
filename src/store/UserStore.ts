import { types, flow, Instance } from 'mobx-state-tree';

export const GeoType = types.model({
  "lat": '',
  "lng": ''
})

export const AdressType = types.model({
  "street": '',
  "suite": '',
  "city": '',
  "zipcode": '',
  geo: types.optional(GeoType, {})
})

export const CompanyType = types.model({
  "name": '',
  "catchPhrase": '',
  "bs": '',
})


export const UserType = types.model({
  "id": types.number,
  "name": types.string,
  "username": types.string,
  "email": types.string,
  
  "phone": types.string,
  "website": types.string,
  address: types.optional(AdressType, {}),
  "company": types.optional(CompanyType, {})
})

export const UserStore = types.model('UserStore', {
  users: types.array(UserType)
}).actions(self => ({
  fetchUsers: flow(function* () {
    const usersResponse: any = yield window.fetch('https://jsonplaceholder.typicode.com/users');
    const users =  yield usersResponse.json();
    self.users.replace(users);
  }),
}))

export type UserStoreType = Instance<typeof UserStore>