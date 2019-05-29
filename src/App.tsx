import makeInspectable from 'mobx-devtools-mst';

import React from 'react';
import './App.css';
import { TaskList } from './features';
import { PostList } from './features/PostList';
import { AppStore } from './store/AppStore';

import { Provider } from "mobx-react"

const appStore = makeInspectable(AppStore.create({}))

const App: React.FC = () => {
  return (
    <Provider appStore={appStore}>
      <div className="App">
        <header className="App-header">
        <TaskList/>
        <PostList/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
