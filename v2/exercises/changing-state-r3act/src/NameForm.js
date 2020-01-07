import React from "react"

class NameForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            names: []
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const name = this.state.firstName + " " + this.state.lastName
        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            names: [...prevState.names, name]
        }))
    }


    render() {
      const whatsYoName = this.state.names.map((name, colors) => <h1 key={name} style={{color: colors % 2 === 0 ? "black" : "blue"}}>{name}</h1>)

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={this.state.firstName} 
                        placeholder="first name" 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        value={this.state.lastName} 
                        placeholder="last name" 
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
                <div>
                    {whatsYoName}
                </div>
            </div>
        )
    }
}

export default NameForm