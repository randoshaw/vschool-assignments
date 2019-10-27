import React from 'react'
import { withBounty } from '../BountyProvider'

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
            fName: "",

        }
    }

    // debug(debug) {
    //     console.log(debug)
    // }

    handleChange = (e) =>  {
        // e.target.name
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log("name", e.target.name)
        // console.log("value", e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.fName)
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
            <input type= 'text' value={this.state.fName} name= 'fName' onChange={this.handleChange} placeholder="First Name"/>
            <button>Submit</button>
            </form>
        )
    }
}



export default withBounty(Form)