import React, { Component } from 'react';
import './../style.css';
import People from './people';

export default class PeopleList extends Component {
  constructor(props){
    super(props);
    this.state={
      characters: []
    }
  }

  renderCharacterList() {
    return this.props.characters.map((character, index) => {
      return (
          <div key={index} >
              <People character={character} />
          </div>
      )
    })
  }

  render(){
    return (
      <div className="main_list_container">
          {this.renderCharacterList()}
      </div>
    )
  }
}
