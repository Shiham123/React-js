import React, { useState } from 'react';
import Todo from './todo';
import NewTodo from './newTodo';

const dummyTodo = ['Data One', 'Data Two'];

function Home() {
  const [todo, setTodo] = useState(dummyTodo);

  const handleNewTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  };

  return (
    <div>
      <NewTodo newTodo={handleNewTodo} />
      <Todo todoPass={todo} />
    </div>
  );
}

export default Home;
