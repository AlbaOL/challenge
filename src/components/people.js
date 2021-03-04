import React, { Component } from 'react';
import axios from 'axios';

export default class People extends Component {

  constructor(props){
    super(props);
    this.state={
      character: {},
      showInfo: false,
    }
  }

  componentDidMount() {
    axios.get(this.props.character)
    .then((response) => {
      console.log("Response data: ",response.data)
      this.setState({ character: response.data })
    })
    .catch(error => console.log(error));
  }

  showInfo = _ =>{
    return(      
      <div>
      <p>
        {this.state.character.name}
      </p>
      <p>
        {this.state.character.hair_color}
      </p>
      <p>
        {this.state.character.mass}
      </p>
    </div>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div onClick={()=>{this.setState({showInfo: !this.state.showInfo})}}>
          <h4>{this.state.character?.name}</h4>
        </div>
        {this.state.showInfo && this.showInfo()}
      </React.Fragment>
    )
  }
}
