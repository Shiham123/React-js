import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodo } from '../services/action/todoAction';

const TodosApp = () => {
  const { loading, error, todos } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodo());
  }, [dispatch]);

  return (
    <div>
      <h1>react redux fetch app</h1>
      {loading && <h3>Loading ... </h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {todos &&
          todos.map((todo) => {
            const { id, title } = todo;
            return (
              <article key={id}>
                <h4>{title}</h4>
                <h4>{id}</h4>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default TodosApp;
