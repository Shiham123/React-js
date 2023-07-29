import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const todos = [
  {
    id: uuidv4(),
    title: 'Title one',
    description: 'description one',
  },
  {
    id: uuidv4(),
    title: 'title two',
    description: 'Description two',
  },
  {
    id: uuidv4(),
    title: 'title three',
    description: 'Description three',
  },
];

const List = () => {
  return (
    <div>
      {todos.map((todo) => {
        const { id, title, description } = todo;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
