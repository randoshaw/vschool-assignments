import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import CarInfo from "./components/CarInfo";
import LogEntry from "./components/LogEntry";
import LoggedSum from "./components/LoggedSum";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

import "./styles.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const App = params => {
    return (
        <>
            <Header />
            <Switch>
                <Route
                    path="/car"
                    component={rprops => Navbar({ ...rprops })}
                />
                <Route path="/"></Route>
            </Switch>
            <Switch>
                <Route
                    path="/carInfo/create"
                    component={rprops =>
                        CarInfo({ ...rprops, title: "Create", cancelButton: false})
                    }
                />

                <Route
                    path="/car/carInfo/edit"
                    component={rprops => CarInfo({ ...rprops, title: "Edit", cancelButton: true})}
                />
                <Route path="/car/logentry" component={LogEntry} />
                <Route path="/car/loggedsum" component={LoggedSum} />
                <Route exact path="/" component={Home} />
            </Switch>
        </>
    );
};

export default App;
