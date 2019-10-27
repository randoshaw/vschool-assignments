import React, {Component} from 'react'
import { Switch, Route} from 'react-router-dom'
import Nav from './Nav'
import About from './About'
import Home from './Home'
import Available from './Available'
import Adopt from './Adopt'
import Footer from './Footer'
import '../styles/styles.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            dogs: [],
            cats: []
        }
    }

    componentDidMount(){
        this.getDoogies()
        this.getKitties()
    }
    
    return (
        <main>
            <Nav />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/available">
                    <Available />
                </Route>

                <Route path="/adopt">
                    <Adopt />
                </Route>
                
                <Route path="/about">
                    <About />
                </Route>
            </Switch>

            <Footer />
        </main>
    )
}

export default App