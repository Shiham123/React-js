import React, { useState } from 'react';
import style from './newTodo.module.css';

function NewTodo(props) {
  const [todo, setTodo] = useState({ title: '', desc: '' });
  const { title, desc } = todo;
  const { newTodo } = props;

  const handleInput = (event) => {
    const name = event.target.name;

    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newTodo(todo);
    setTodo({ title: '', desc: '' });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style['form-field']}>
        <label htmlFor="title">Title : </label>
        <input type="text" name="title" value={title} onChange={handleInput} />
      </div>

      <div className={style['form-field']}>
        <label htmlFor="desc">desc : </label>
        <input type="text" name="desc" value={desc} onChange={handleInput} />
      </div>

      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodo;
