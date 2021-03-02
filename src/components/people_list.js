import React, { Component } from 'react';
import axios from 'axios';
import './../style.css';
import { Link } from 'react-router-dom';
import People from './people';

export default class PeopleList extends Component {
  constructor(props){
    super(props);
    this.state={
      characters: []
    }
  }

  componentDidMount() {
    axios.get('https://swapi.dev/api/people/')
    .then((response) => {
      console.log("Response data: ",response.data)
      this.setState({ characters: response.data.results })
    })
    .catch(error => console.log(error));
  }

  renderCharacterList() {
    return this.state.characters.map((people,index) => {
      return <div key={index}>
          <Link to={`/people/${index + 2}`}>
            <People people={people} />
          </Link>
        </div>
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
