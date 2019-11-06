import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/nova-light/theme.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import CarInfo from "./components/CarInfo";
// import LogEntry from "./components/LogEntry";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import LogEdit from "./components/LogEntry/LogEdit";
import LoggedSum from "./components/Summary/LoggedSum";
import LogNew from "./components/LogEntry/LogNew";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import "./styles.css";


const App = params => {
    return (
        <div className="container">
            <Header />
            <Switch>
                <Route
                    path="/car"
                    component={rprops => Navbar({ ...rprops })}
                />
                <Route path="/"></Route>
            </Switch>
            <div style={{minHeight: "61vh"}}>

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
                    component = {LogNew}
                    path = "/car/logentry/new"
                    redirectTo = "/"
                />
                <ProtectedRoute 
                    component = {LogEdit}
                    path = "/car/logentry/edit"
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
            </div>
            <Footer />
        </div>
    );
};

export default App;
