import makeInspectable from 'mobx-devtools-mst';

import React from 'react';
import './App.css';
import { TaskList } from './features';
import { PostList } from './features/PostList';
import { AppStore } from './store/AppStore';

import { Provider } from "mobx-react"
import { UserList } from './features/UserList/UserList';

const appStore = makeInspectable(AppStore.create({}))

const App: React.FC = () => {
  return (
    <Provider appStore={appStore}>
      <div className="App">
        <header className="App-header">
        <TaskList/>
        <UserList/>
        <PostList/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
