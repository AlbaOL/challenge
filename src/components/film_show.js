import React, { Component } from 'react';
import axios from 'axios';
import './../style.css';
import { Link } from 'react-router-dom';
import PeopleList from './people_list';

export default class FilmShow extends Component {
  constructor(props){
    super(props);
    this.state={
      film: {}
    }
  }

  componentDidMount() {
    const { index } = this.props.match.params;
    axios.get(`https://swapi.dev/api/films/${index}/`)
    .then(response => {
      console.log(response);
      this.setState({ film: response.data})
    })
    .catch(error => console.log(error));
  }

  render(){

    const { film } = this.state;

    return (
      <div>
      <Link to="/">
        <p>Back to film index</p>
      </Link>
      <table>
        <tbody>
          <tr>
            <th><h1>{film.title}</h1></th>
          </tr>
          <tr>
            <td><p>Director: </p></td>
            <td><p>{film.director} name</p></td>
          </tr>
          <tr>
            <td><p>Producer: </p></td>
            <td><p>{film.producer}</p></td>
          </tr>
          <tr>
            <td><p>Released: </p></td>
            <td><p>{film.release_date}</p></td>
          </tr>
          <tr>
            <td><p>Characters: </p></td>
            <td>
              <div className="main_list_container">
                {console.log('characters', film.characters)}
                {film.characters && <PeopleList characters={film.characters}/>}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}
