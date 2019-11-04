import React, { useContext } from "react";
import { UserContext } from "./context/UserProvider";
import Home from "./components/Home";
import Header from "./components/Header";
import CarInfo from "./components/CarInfo";
import LogEntry from "./components/LogEntry";
import LoggedSum from "./components/LoggedSum";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"

import "./styles.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const App = params => {
    const { authErrMsg, user } = useContext(UserContext);
    console.log("App ", user, authErrMsg);
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
                <ProtectedRoute
                    redirectTo = "/"
                    path="/carInfo/create"
                    component={rprops =>
                        CarInfo({
                            ...rprops,
                            title: "Create",
                            cancelButton: false
                        })
                    }
                />

                <ProtectedRoute
                    redirectTo = "/"
                    path="/car/carInfo/edit"
                    component={rprops =>
                        CarInfo({
                            ...rprops,
                            title: "Edit",
                            cancelButton: true
                        })
                    }
                />
                <ProtectedRoute 
                    component = {LogEntry}
                    path = "/car/logentry/:method"
                    redirectTo = "/"
                />
                <ProtectedRoute 
                    component = {LoggedSum}
                    path = "/car/loggedsum"
                    redirectTo = "/"
                />
                <Route path="/logout" component={Logout} />
                <Route exact path="/" component={Home} />
            </Switch>
        </>
    );
};

export default App;
