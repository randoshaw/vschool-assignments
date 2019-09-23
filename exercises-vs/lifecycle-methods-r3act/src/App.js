import React, { Component } from 'react'

// Mount: when component starts
// Unmount: when component leaves the page

class App extends Component {
    constructor(){
        super()
        this.state = {
            color: "dodgerblue"
        }
    }

    componentDidMount(){
        window.addEventListener("keydown", (e) => {
            if (e.which === 82){
                this.setState({ color: "red" })
            } else if(e.which === 71){
                this.setState({color: "green"})
            } else if(e.which === 66){
                this.setState({color: "blue"})
            }
        })
    }

    componentWillUnmount(){
        window.removeEventListener("keydown", null)
    }

    render(){
        return (
            <div style={{
                width: '250px',
                height: '250px',
                margin: '0 auto',
                marginTop: '250px',
                backgroundColor: this.state.color
            }}>

            </div>
        )
    }
}

export default App