import React, { Component } from 'react';

export default class People extends Component {
  
  render() {
    return (
      <div>
        <h4>{this.props.people.name}</h4>
      </div>
    )
  }
}
