import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

function ReactHooks() {
  const [count, setCount] = useState(0);

  function plusValue() {
    setCount((count) => count + 1);
  }

  function minusValue() {
    setCount((count) => count - 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button variant="primary" onClick={plusValue}>
        Plus <FaPlus />
      </Button>{' '}
      <Button variant="secondary" onClick={minusValue}>
        Minus <FaMinus />
      </Button>
    </div>
  );
}

export default ReactHooks;
