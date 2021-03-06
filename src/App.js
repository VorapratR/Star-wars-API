import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
const URL = 'https://swapi.co/api/starships/';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      starships: []
    }
  }

  componentDidMount() {
    axios.get(URL)
      .then(res => {
        this.setState({ starships: res.data.results })
        console.log(res.data.results)
      })
  }
  renderDisplay() {
    return _.map(this.state.starships, starship => {
      return (
        <div >
          <h2>name: {starship.name}</h2>
          <li className="list-group-item">
            model: {starship.model}<br/>
          </li>
          <li className="list-group-item">
           manufacturer: {starship.manufacturer}<br/>
          </li>
          <li className="list-group-item">
            length: {starship.length}<br/>
          </li>
          <li className="list-group-item">
            max_atmosphering_speed: {starship.max_atmosphering_speed}<br/>
          </li>
        </div>
      )
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="starship" />
          {this.renderDisplay()}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
