import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import CarInfo from "./components/CarInfo";
import LogEntry from "./components/LogEntry"
import LoggedSum from "./components/LoggedSum"
import Navbar from "./components/Navbar"
import { Switch, Route } from "react-router-dom";

import "./styles.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const App = params => {
    return (
        <>
         <Header/>
            <Switch>
                <Route path='/car/'>
                    <Navbar />
                </Route>
                <Route path='/'></Route>
            </Switch>
            <Switch>
                <Route path='/car/carInfo/create'>
                    <CarInfo title="create" />
                </Route>
                <Route path='/car/carInfo/edit'>
                    <CarInfo title="edit" />
                </Route>
                <Route path='/car/logentry'>
                    <LogEntry />
                </Route>
                <Route path='/car/loggedsum'> 
                    <LoggedSum />
                </Route>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
        </>
    );
};

export default App;
