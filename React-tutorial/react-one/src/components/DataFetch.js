import React, { useState, useEffect } from 'react';

function DataFetch() {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        if (!response.ok) {
          throw Error('fetching has a problem');
        }
        return response.json();
      })
      .then((data) => {
        setTodos(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  });

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

export default DataFetch;
