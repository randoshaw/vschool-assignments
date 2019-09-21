import React from 'react'
import Navbar from './Navbar.js'
import Header from './Header.js'
import Info from './Info.js'
import Products from './Products.js'
import Footer from './Footer.js'
import Images from './img/1.jpeg'
import './style.css'

function App(){
    return (
        <div className="app-container">
            <Navbar />
            <Header />
            <Info />
            <Products />
            <Footer />
        </div>
    )
}

export default App