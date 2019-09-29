import React, { Component } from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Daily from './components/Daily'
import FindCity from './components/FindCity'
import axios from 'axios';
import { darksky } from './components/.apikeys.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      city: '',
      state: '',
      latLng: {},
      weatherData: {
        daily: {
          summary: 'test'
        }
      }
    }
  }

getWeather = ({lat, lng}) => {
  console.log(lat,lng)
  axios.get(`${darksky}/${lat},${lng}`)
  .then(res=>{
    console.log(res)
    this.setState({weatherData: res.data})
  })
  .catch(err=>console.log(err))
}

  shareLocation = (loc) => {
    this.setState({city: loc.city, state: loc.state, latLng: loc.latLng}, this.getWeather(loc.latLng) )
  }

  render() {
  return (
    <div className="App">
    <Header />
    <Navbar />
      <Switch>
        <Route exact path = '/' component = { () => Daily({dailySummary: this.state.weatherData.daily.summary}) } />
        <Route path ='/weekly' component = { () => <div>weekly {this.state.city}</div> } />
        <Route path = '/favs' component = { () => <div>favs {this.state.city}</div> } />
      </Switch>
      <FindCity shareLocation = { this.shareLocation } />
    </div>)
  };
}


export default App;