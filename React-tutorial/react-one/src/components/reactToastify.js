import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ReactToastify() {
  function handleClick() {
    toast('add new todo');
  }

  return (
    <section>
      <h2>Add todo</h2>
      <button onClick={handleClick}>Add Todo</button>
      <ToastContainer />
    </section>
  );
}

export default ReactToastify;
