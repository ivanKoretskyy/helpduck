import React from 'react';
import './App.css';
import { TaskList } from './features';
import { PostList } from './features/PostList';

const posts = [
  {
  "userId": 7,
  "id": 61,
  "title": "voluptatem doloribus consectetur est ut ducimus",
  "body": "ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit"
  },
  {
    "userId": 7,
    "id": 62,
    "title": "beatae enim quia vel",
    "body": "enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio"
  },
]

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <TaskList/>
      <PostList posts={posts}/>
      </header>
    </div>
  );
}

export default App;
