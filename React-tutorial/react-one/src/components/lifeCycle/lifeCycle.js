import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log('component did mount');
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  shouldComponentUpdate() {
    console.log('should component update');
    return true;
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    {
      console.log('render');
    }

    return (
      <div>
        Count : {this.state.count}
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default LifeCycle;
