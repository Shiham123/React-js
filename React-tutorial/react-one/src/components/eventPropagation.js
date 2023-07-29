import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/eventPropagation.css';

function EventPropagation() {
  const handleIncrement = (event) => {
    event.stopPropagation();
    console.log('handle increment : ', event.target);
  };

  const handleParent = (event) => {
    console.log('parent event', event.target);
  };

  return (
    <div className="parent" onClick={handleParent}>
      <h1>this is event propagation</h1>
      <Button variant="success" onClick={handleIncrement}>
        Click me
      </Button>
    </div>
  );
}

export default EventPropagation;
