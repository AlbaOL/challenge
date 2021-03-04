import React, { Component } from 'react';
import axios from 'axios';
import Film from './film';
import './../style.css';
import { Link } from 'react-router-dom';

export default class MainList extends Component {
  constructor(props){
    super(props);
    this.state={
      films: [],
      favFilms: [],
    }
  }

  componentDidMount() {
    axios.get('https://swapi.dev/api/films/')
    .then((response) => {
      console.log("Response data: ",response.data)
      this.setState({ films: response.data.results })
    })
    .catch(error => console.log(error));
  }

  renderFilmList() {
    return this.state.films.map((film,index) => {
      return <div style={{display:'flex', alignItems:'center'}} key={index}>
          <Link to={`/films/${index + 2}`}>
            <Film film={film} />
          </Link>
          <div onClick={()=>{/*add or remove fav*/}} style={{color:this.isFav()?'red' : 'black'}} > <i className="icon icon-star"> Add favourite</i> </div>
        </div>
    })
  }
  isFav = _=>{
    //check fav
    return false;
  }

  render(){
    return (
      <div className="main_list_container">
          {this.renderFilmList()}
      </div>
    )
  }
}
