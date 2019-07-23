import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import s from './UserList.module.scss';
import { inject, observer } from 'mobx-react';
import { AppStoreType } from '../../store/AppStore';

export interface UserListProps {
    appStore?: AppStoreType;
}
 
export interface UserListState {
  title: string;
}

const initialValuesUser = {
  firstName: '',
  pet: '',
}

 
class UserListComponent extends React.Component<UserListProps, UserListState> {
  state = { title: 'User List' }
  
  get userStore(){
    return this.props.appStore!.userStore;
  }

  componentDidMount() {
    this.userStore.fetchUser();
  }
  
  render() { 
    return (
      <div>
       <div className={s.withBorder}>
         <h5>Simple formik form whith name and onChange on every input</h5>
         <Formik
          initialValues={initialValuesUser}
          onSubmit={(values) => console.log(values)}
          render={({handleSubmit, handleChange}) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">
                <div>FirsName</div>
                <input type="text" name="firstName" onChange={handleChange}/>
              </label>
              <label htmlFor="pet">
                <div>Pet</div>
                <select name="pet" onChange={handleChange}>
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Other</option>
                </select>
              </label>
              <button type="submit">Submit</button>
            </form>
          )}
         >
         </Formik>
       </div>

       <div className={s.withBorder}>
         <h5>with field</h5>
         <Formik
          initialValues={initialValuesUser}
          onSubmit={(values) => console.log(values)}
          render={({handleSubmit, handleChange}) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">
                <div>FirsName</div>
                <Field type="text" name="firstName"/> {/*onChange={handleChange}*/}
              </label>
              <label htmlFor="pet">
                <div>Pet</div>
                <select name="pet" onChange={handleChange}>
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Other</option>
                </select>
              </label>
              <button type="submit">Submit</button>
            </form>
          )}
         >
         </Formik>
       </div>
      <div>
         
       </div>
      </div>
    );
  }
}

export const UserList = inject('appStore')(observer(UserListComponent));