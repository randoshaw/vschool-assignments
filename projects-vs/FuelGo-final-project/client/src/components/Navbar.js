import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css"

export default props => {
    return (
        <div className="nav">
            <Link
                className={
                    props.location.pathname === "/car/logEntry/new"
                        ? "nav-active"
                        : ""
                }
                to="/car/logEntry/new"
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
                Saved Logs
            </Link>
            <Link to="/logout">
                Sign Out
            </Link>
        </div>
    );
};
