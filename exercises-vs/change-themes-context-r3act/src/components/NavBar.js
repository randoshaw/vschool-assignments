import React from 'react'
import { withTheme } from '../context/ThemeProvider'

//props coming from withTheme
const NavBar = (props) => {
    return (
        <nav className={`nav-${props.theme}`}>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default withTheme( NavBar )

