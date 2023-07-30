import React, { Fragment } from 'react';
import CounterView from './features/counter/counterView';
import PostView from './features/posts/postView';

function App() {
  return (
    <Fragment>
      <CounterView />
      <PostView />
    </Fragment>
  );
}

export default App;
