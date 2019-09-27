import React, { Component } from 'react';
import People from './People'
import axios from 'axios'
import don from './don.png'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json').then(response => {
      const data = response.data
      this.setState({
        data
      })
    })
  }


  render() {
    // console.log(this.state.data)
    return (
      <div>
        <div className='banner' >
          <img className='bannerPic' src={don}></img>
          <h1 className='heading'>Don Corleone's Hit List</h1>
        </div><br></br>
        <div className='everyPersonContainer'>
          {
            this.state.data.map(person => 
              <People 
                name={person.name}
                image={person.image}
              />
            )
            
          }
        </div>
      </div>
    );
  }
}
export default App;