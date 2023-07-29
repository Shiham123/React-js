import React from 'react';

function Todo(props) {
  const { todoPass } = props;

  const showTodo = todoPass.map((item, index) => {
    return <h1 key={index}>{item}</h1>;
  });

  return <div>{showTodo}</div>;
}

export default Todo;
