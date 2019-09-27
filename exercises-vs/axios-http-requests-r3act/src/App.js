import React, { Component } from "react"
import axios from 'axios'

// "https://rickandmortyapi.com/api/character"

class App extends Component {
    constructor(){
        super()
        this.state = {
            characters: []
        }
    }

    componentDidMount(){
        axios.get("https://rickandmortyapi.com/api/character")
        .then(res => {
            this.setState({
                characters: res.data.results
            })
        })
        .catch(err => console.log.apply(err))
    }

    render(){
        const mappedCharacters = this.state.characters.map(character => {
            return (
                <div
                    style={{backgroundImage: `url(${character.image})`, height: 200, backgroundSize: "cover", backgroundPosition: "center"}}
                     key={character.id}>
                    <p>{character.name}</p>
                </div>
            )
        })

        return(
            <div>
                { mappedCharacters }
            </div>
        )
    }
}

export default App