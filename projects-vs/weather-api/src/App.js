import React, { Component } from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Daily from './components/Daily'
import Weekly from './components/Weekly'
import Favorites from './components/Favorites'
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
      favs: [],
      weatherData: {},
      dailyData: {},
      weeklyData: {
        summary:'',
        days: []
      }
    }
  }

extractData = (data) => {
  // console.log(data)
  const dailyData = {
    city: this.state.city,
    state: this.state.state,
    shortSummary: data.currently.summary,
    summary: data.daily.data[0].summary,
    currentTemp: data.currently.temperature,
    highTemp:data.daily.data[0].temperatureHigh,
    lowTemp: data.daily.data[0].temperatureLow,
    saveToFav: this.saveToFav
  }

  const weeklyData = {
    city: this.state.city,
    state: this.state.state,
    summary: data.daily.summary,
    days: data.daily.data
  }

  this.setState({dailyData,weeklyData})
}

// Gets the weather info from DarkSky api
getWeather = ({lat, lng}) => {
  // console.log(lat,lng)
  axios.get(`${darksky}/${lat},${lng}`)
  .then(res=>{
    console.log(res)
    this.setState({weatherData: res.data}, this.extractData(res.data))
  })
  .catch(err=>console.log(err))
}

// Method that sets the state when called after selected city in results list
  shareLocation = (loc) => {
    this.setState({
      city: loc.city, 
      state: loc.state, 
      latLng: loc.latLng}, 
      this.getWeather(loc.latLng))
  }

  saveToFav = () => {

    

    this.setState(prev => ({
      favs: [...prev.favs, {
        city: prev.city,
        state: prev.state,
        latLng: prev.latLng,
      }]
    }))
   
  }

  // Longer method
  // shareLocation = (loc) => {
  //   const {city, state, latLng} = loc
  //   const newState = {city: city, state: state, latLng: latLng} 
  //   const newStateFunc = function(currentState){  // Function must return new state object
  //     return {city: city, state: state, latLng: latLng}
  //   }
  //   const whenStateIsDone = this.getWeather(latLng)
  //   this.setState(newStateFunc, whenStateIsDone)
  // }

  render(){
    // console.dir(this.props);
    return (
      <div className="App">
      <Header />
      <Navbar />
      <Switch>
        <Route exact path='/' render = { 
            (props) => <Daily {...props} 
                dailyData = { this.state.dailyData } 
                saveToFav = { this.saveToFav }
                /> } />
        <Route path='/weekly' render = { 
            (props) => <Weekly {...props} 
                weeklyData = { this.state.weeklyData } /> } />
        <Route path='/favs' render = { 
            (props) => {

            return (<Favorites {...props} 
              favs = { this.state.favs } 
              saveToFav = { this.saveToFav } />) } 
            }/>
      
      </Switch>
      {/* React Router allows the url in address bar to decide which componenet is rendered. Another Switch because we need to access the history.push method  */}
      <Switch>
      <Route path = '/' render = {
              (props) => <FindCity {...props}
                shareLocation = {this.shareLocation}/>
                }/>
      </Switch>
    </div>);
  }
}


export default App;