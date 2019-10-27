import React from 'react'
import axios from 'axios'
const Context = React.createContext()

class BountyProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            savedData: [],
        }
    }

    componentDidMount() {
        this.getBounties()
    }

    getBounties = () => {
        axios.get('/bounty')
        .then(res => {
            this.setState({savedData: res.data})
        })
        .catch(err => {
            console.log(err)
        })

    }

    render() {
        return (
            <Context.Provider value={{
                people: this.state
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const withBounty = C => props => {
    return (
        <Context.Consumer>
            { (value) => <C {...value} {...props} />}
        </Context.Consumer>
    )
}

export default BountyProvider