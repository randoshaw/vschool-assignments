import React, { Component } from "react";
import axios from 'axios';
import Box from './Box.js'
import './styles.css';

// Classes can have STATE and LIFECYCLE METHODS!! 

class App extends Component {
    constructor(){
        super()
        this.state = {
            color: ''
        }
    }

    componentDidMount(){
        axios.get("http://www.colr.org/json/color/random")
        .then(res => //console.log(res.data.colors[0].hex))
            this.setState({
                color: res.data.colors[0].hex}))

            .catch(err => console.log(err))
    }

    render(){
        const coloredBox = this.state.color
        return (
            <div>
                <Box 
                    color = {coloredBox}
                />
            </div>
        )
    }
}


export default App

