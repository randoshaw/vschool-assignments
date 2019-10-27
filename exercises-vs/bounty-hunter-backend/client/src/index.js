import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import BountyProvider from './BountyProvider'

ReactDOM.render(
    <BountyProvider>
        <App />
    </BountyProvider>
, document.getElementById("root"))