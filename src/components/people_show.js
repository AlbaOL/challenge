import React, { Component } from 'react';
import axios from 'axios';
import './../style.css';
import { Link } from 'react-router-dom';

export default class PeopleShow extends Component {
  constructor(props){
    super(props);
    this.state={
      people: {}
    }
  }

  componentDidMount() {
    const { index } = this.props.match.params;
    axios.get(`https://swapi.dev/api/people/${index}/`)
    .then(response => {
      console.log(response);
      this.setState({ people: response.data})
    })
    .catch(error => console.log(error));
  }

  render(){

    const { people } = this.state;

    return (
      <div>
      <Link to="/films/">
        <p>Back to films index</p>
      </Link>
      <table>
        <tbody>
          <tr>
            <th><h1>{people.name}</h1></th>
          </tr>
          <tr>
            <td><p>Age: </p></td>
            <td><p>{people.age}</p></td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}
