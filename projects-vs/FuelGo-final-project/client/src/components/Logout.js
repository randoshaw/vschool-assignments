import React, {useContext, useEffect} from 'react'
import {UserContext} from "../context/UserProvider"
import { Button } from 'primereact/button'
import {Link} from 'react-router-dom'

export default (props) => {
    const {logout} = useContext(UserContext)
    useEffect(() => {
        logout()
    },[])

    return (
        <div>
            You are now logged out
            <Button label="Log In" />
            <Link to="/">Log In</Link>
        </div>
    )
}
