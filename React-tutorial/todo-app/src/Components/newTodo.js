import React, { useState } from 'react';

function NewTodo(props) {
  const [todo, setTodo] = useState('');
  const { newTodo } = props;

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newTodo(todo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Add Todo : </label>
      <input type="text" value={todo} onChange={handleInputChange} />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodo;
