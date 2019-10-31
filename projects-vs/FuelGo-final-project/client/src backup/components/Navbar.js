import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props){
    return (
        <div>
            <Link to="/public">Posts</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/addpost">New Post</Link>
            <button onClick={props.logout}>Logout</button>
        </div>
    )
}

export default Navbar