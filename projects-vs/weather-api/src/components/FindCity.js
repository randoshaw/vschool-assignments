// // import React, { Component} from 'react'
// // class FindCity extends Component {

// import React from 'react'
// import axios from 'axios'
// import { mapquest } from './.apikeys.js'

// class FindCity extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { 
//             result: []
//         }
//     }
    
//     handleChange = (event) => {
//         this.setState({city: event.target.value})
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=${mapquest}&location=${this.state.city}`)
//         .then(res=>{
//             console.log(res)
//         })
//         .catch(err =>{
//             console.log(err)
//         })
        
//     }


//     // mappedResults = (props) => {
//     //     return this.state.results.map(city =><li>{city}</li>)
//     // }


//     render() {
//         // console.log(mapquest)
//         const cityItem = (city) => {
//             return (
//                 <li>{city}</li>
//             )
//         }
//         const mappedResults = (props) => props.map(cityItem)

//         return (
//             <div className ='find-city'>
//             <h2>Find City: &nbsp; </h2>
//             <form onSubmit = {this.handleSubmit}>
//                 <input type = "text" name = "city" onChange = {this.handleChange} value = {this.state.city}/>
//                 <button>Find</button>
//                 <ul>
//                     {mappedResults(this.state.result)}
//                 </ul>
//             </form>
//             </div>
//         )
//     }
// }

// export default FindCity;

/////

import React from 'react';
import axios from 'axios';
import { mapquest } from './.apikeys.js'

class FindCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            result: [],
            userSelected: {},
            cityInput: ''
         }
    }
    
    handleChange = (event) => {
        this.setState({cityInput: event.target.value})
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=${mapquest}&location=${this.state.cityInput}`)
            .then(res=>{
                this.setState({result: res.data.results[0].locations.map(loc =>{ return {
                    city:loc.adminArea5,
                    state: loc.adminArea3,
                    latLng: loc.latLng
                    }
                })});
            })
            .catch(err=>{
                console.log(err);
            })
    }
    
    handleSelected = (loc) => {
        // console.log(loc)
        this.setState({result: [], userSelected: loc, city: ''})
        this.props.shareLocation(loc)
    }

    render() { 
        const cityItem = (loc, index) =>{
            return (
                <button onClick={() => {this.handleSelected(loc)}} key = {index}> {loc.city}, {loc.state}</button>
            )
        }
        const mappedResults = (props) => props.map(cityItem)

        // return (
        //     <div>
        //         <div className='find-city'>
        //             <h2>Find City: &nbsp; </h2>
        //             <form onSubmit={this.handleSubmit}>
        //                 <input 
        //                 type = "text"
        //                 name = "city" 
        //                 onChange = {this.handleChange} 
        //                 value = {this.state.cityInput}
        //                 placeholder = 'Enter City, State, or Zip Code'
        //                 autoComplete='off'/>
        //                 <button>find</button>
        //             </form>
        //             </div>

        //             <div className = 'find-results'>
        //                 {mappedResults(this.state.result)}
        //             </div>
        //     </div> 
        // );

        return (
            <div >
                    {/* <h2>Find City: &nbsp; </h2> */}
                    <form onSubmit = {this.handleSubmit} className = 'find-city-form'>
                        <input type = "text" name = "city" 
                            onChange = {this.handleChange} 
                            value = {this.state.cityInput} 
                            placeholder = 'Enter City, State, or Zip Code'
                            autoComplete = 'off'/>
                        <div className='find-city-submit' onClick={()=>console.log('clicked find')}>Find</div>
                    </form>
            
                <div className = 'find-results'>
                    {mappedResults(this.state.result)}
                </div>
            </div>

         );
    }
}
 
export default FindCity;
