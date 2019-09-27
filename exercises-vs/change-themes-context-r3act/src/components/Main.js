import React from 'react'
import { withTheme } from '../context/ThemeProvider'

const Main = (props) => {
    return (
        <main className = {`main-${props.theme}`}>
            <h1>Color Theme</h1>
            <button onClick={props.changeTheme}>Toggler</button>
        </main>
    )
}

export default withTheme( Main )