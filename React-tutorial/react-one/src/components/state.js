import React, { Component } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/state.css';

/**
 * ! import file from variant kind of method
 */

class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  buttonDisable = () => {
    return this.state.count === 0;
  };

  render() {
    const { count } = this.state;
    return (
      <div className="style-state">
        <h1>Count : {count}</h1>
        <Button onClick={this.increment} variant="primary" className="m-2">
          <FaPlus />
        </Button>

        <Button
          onClick={this.decrement}
          variant="danger"
          className="m-2"
          disabled={this.buttonDisable()}
        >
          <FaMinus />
        </Button>
      </div>
    );
  }
}

export default State;
