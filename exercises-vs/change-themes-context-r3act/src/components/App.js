import React from 'react'
import NavBar from './NavBar'
import Main from './Main'
import Footer from './Footer'
import '../style.css'
const App = (props) => {
    return (
        <div>
            <NavBar />
            <Main />
            <Footer />
        </div>
    )
}


export default App