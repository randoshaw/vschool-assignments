import React from "react";
import { Link } from "react-router-dom";
// Update Car Info, New Log, Log Summary, Sign Out
export default props => {
    // console.log(props);
    return (
        <div className="nav">
            <Link
                className={
                    props.location.pathname === "/car/logEntry"
                        ? "nav-active"
                        : ""
                }
                to="/car/logEntry"
            >
                New Log
            </Link>
            <Link
                className={
                    props.location.pathname === "/car/carInfo/edit"
                        ? "nav-active"
                        : ""
                }
                to="/car/carInfo/edit"
            >
                Update Car Info
            </Link>
            <Link
                className={
                    props.location.pathname === "/car/loggedSum"
                        ? "nav-active"
                        : ""
                }
                to="/car/loggedSum"
            >
                Log Summaries
            </Link>
            <Link to="/">
                Sign Out
            </Link>
        </div>
    );
};
