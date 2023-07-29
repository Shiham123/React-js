import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

class ReactEventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrease() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>{count}</h1>

        <Button variant="primary" onClick={this.increase}>
          Click me
          <FaPlus />
        </Button>

        <Button variant="secondary" onClick={this.decrease}>
          Click me 2
          <FaMinus />
        </Button>
      </div>
    );
  }
}

export default ReactEventBinding;
