import React, { Component } from 'react';

export default class Film extends Component {
  
  render() {
    return (
      <div>
        <h2>{this.props.film.title}</h2>
      </div>
    )
  }
}
