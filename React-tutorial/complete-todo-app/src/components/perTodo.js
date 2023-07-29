import React from 'react';
import style from './perTodo.module.css';

function PerTodo(props) {
  const {
    id,
    todoContent: { title, desc },
  } = props.todo;
  const { removeTodo } = props;

  const handleClick = () => {
    removeTodo(id);
  };

  return (
    <article className={style.todo}>
      <div>
        <h1>{title}</h1>
        <p className={style.todoPara}>{desc}</p>
      </div>

      <div>
        <button className={style.btn} onClick={handleClick}>
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </article>
  );
}

export default PerTodo;
