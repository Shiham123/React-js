import React, { Component } from 'react';

class CardComponent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.description}</h2>
      </div>
    );
  }
}

export default CardComponent;
