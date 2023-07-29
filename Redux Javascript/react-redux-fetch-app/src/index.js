import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import todoStore from './services/store/todoStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={todoStore}>
    <App />
  </Provider>
);
