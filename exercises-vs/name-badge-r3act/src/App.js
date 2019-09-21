import React, { Component } from 'react';
import Form from './Form'
import './styles.css'

class  App extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            place: "",
            phone: "",
            food: "",
            about: "",
            info: []
        }
    }

    handleChange = (event) => {
        
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const newInfo = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            place: this.state.place,
            phone: this.state.phone,
            food: this.state.food,
            about: this.state.about
        }

        this.setState(
            prevState => (
            {
            firstName: "",
            lastName: "",
            email: "",
            place: "",
            phone: "",
            food: "",
            about: "",
            info: [...prevState.info, newInfo]
        }))
    }

    render(){
    return (
        <Form inform = {this.state}
            change = {this.handleChange}
            submit = {this.handleSubmit}
        />
    );
}
}


export default App;