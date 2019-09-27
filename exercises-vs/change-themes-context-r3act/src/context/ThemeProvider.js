import React, { Component } from 'react'

const ThemeContext = React.createContext()

class ThemeProvider extends Component {
    constructor() {
        super()
        this.state = {
            theme: "dark"
        }
    }

    changeTheme = () => {
        this.setState(prevState => ({
            theme: prevState.theme === "dark" ? "light" : "dark"
        }))
    }

    render() {
        return(
            <ThemeContext.Provider value ={{
                theme: this.state.theme,
                changeTheme: this.changeTheme
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

// Same as below
// function withTheme(C) {
//     return function PartTwo(props) {
//         <ThemeContext.Consumer>
//             {value => <C {...value} {...props}/>}
//         </ThemeContext.Consumer>
//     }
// }


export const withTheme = C => props => (
    <ThemeContext.Consumer>
        {value => <C {...value} {...props}/>}
    </ThemeContext.Consumer>
)

export default ThemeProvider