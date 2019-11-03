import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // has its own context
import CarInfo from "./context/carInfoProvider";
import Logs from "./context/logProvider";
// import { UserContext } from "./context/UserProvider";

ReactDOM.render(
    <BrowserRouter>
        {/* <UserContext> */}
            <CarInfo>
                <Logs>
                    <App />
                </Logs>
            </CarInfo>
        {/* </UserContext> */}
    </BrowserRouter>,
    document.getElementById("root")
);
