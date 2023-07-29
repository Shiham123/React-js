import React from 'react';
import PerTodo from './perTodo';
import style from './todo.module.css';

function Todo(props) {
  const { todo, removeTodo } = props;

  const showTodo = todo.map((item) => (
    <PerTodo key={item.id} todo={item} removeTodo={removeTodo} />
  ));

  return <section className={style.todo}>{showTodo}</section>;
}

export default Todo;
