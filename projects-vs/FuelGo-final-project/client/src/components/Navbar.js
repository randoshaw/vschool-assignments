import React from 'react'
import { Link } from 'react-router-dom'
// Update Car Info, New Log, Log Summary, Sign Out
export default (props) => {
    return (
        <>
        <Link to='/car/carInfo/edit'>Update Car Info</Link>
        <Link to='/car/logEntry'>New Log</Link>
        <Link to='/car/loggedSum'>Log Summaries</Link>


        </>
    )
}

