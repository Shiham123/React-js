import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReactWithBootstrap() {
  return (
    <div>
      <Card style={{ width: '30rem' }} className="p-1">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          I am learning react bootstrap with anisul islam sir. he is a great
          teacher such a pleasure to learning with him
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card>
    </div>
  );
}

export default ReactWithBootstrap;
