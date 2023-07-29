import React, { Component } from 'react';

class EventHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changedValue: '',
    };
  }

  handleChange = (event) => {
    this.setState(
      {
        changedValue: event.target.value,
      },
      () => {
        console.log(this.state.changedValue);
      }
    );
  };

  render() {
    const { changedValue } = this.state;

    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <p>{changedValue}</p>
      </div>
    );
  }
}

export default EventHandler;
