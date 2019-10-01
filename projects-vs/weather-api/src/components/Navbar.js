import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div className='navbar'>
            <Link to='/weekly'>Weekly Forecast</Link>
            <Link to='/'>Daily Forecast</Link>
            <Link to='/favs'>List of Favorites</Link>
        </div>
    )
}

export default  Navbar;