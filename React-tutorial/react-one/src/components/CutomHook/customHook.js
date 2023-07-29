import React from 'react';
import FetchHook from './fetchHook';

function CustomHook() {
  const { todos, loading, error } = FetchHook(
    'https://jsonplaceholder.typicode.com/todos'
  );

  const todosMapping =
    todos && todos.map((todo) => <p key={todo.id}>{todo.title}</p>);

  const loadingMessage = <p>Data is loading</p>;
  const errorMessage = <p>{error}</p>;

  return (
    <section>
      {error && errorMessage}
      {loading && loadingMessage}
      {todosMapping}
    </section>
  );
}

export default CustomHook;
