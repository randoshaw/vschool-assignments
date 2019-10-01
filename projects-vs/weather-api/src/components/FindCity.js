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
    // Every time a user types a letter in the form, onChange event listenter inside the input form, runs the handleChange user defines and updates changes into state so that this.state is equal to what shows up in the form.
    handleChange = (event) => {
        this.setState({cityInput: event.target.value})
    }
    // When the user submits the form, an axios get request is sent to mapquest api, then returns an updated state list of results as buttons that the user can select
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
    // When button from displayed list is selected, it will clear the rest of the result buttons. 
    handleSelected = (loc) => {
        // console.log('handleSelected',loc)
        this.setState({result: [], userSelected: loc, cityInput: ''}) // updates FindCity - the child
        this.props.shareLocation(loc) // updates method in the context it's created in (passed props up to App.js because it is shares the method)
        this.props.history.push('/')
    }

    render() { 
        // Functions in render is when they return JSX. Can be above and will still work using 'this'
        const cityItem = (loc, index) =>{
            // console.log(loc)
            return (
                <button onClick={() => {this.handleSelected(loc)}} key = {index}> {loc.city}, {loc.state}</button>
            )
        }
        
        const mappedResults = (props) => props.map(cityItem)

        return (
            <div >
                    {/* <h2>Find City: &nbsp; </h2> */}
                    <form onSubmit = {this.handleSubmit} className = 'find-city-form'>
                        <input type = "text" name = "city" 
                            onChange = {this.handleChange} 
                            value = {this.state.cityInput} 
                            placeholder = 'Enter City, State, or Zip Code'
                            autoComplete = 'off'/>
                        <div className='find-city-submit' onClick={this.handleSubmit}>Find</div>
                    </form>
            
                <div className = 'find-results'>
                    {mappedResults(this.state.result)}
                </div>
            </div>

        );
    }
}
 
export default FindCity;
