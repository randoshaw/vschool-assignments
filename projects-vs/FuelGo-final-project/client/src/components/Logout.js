import React, {useContext, useEffect} from 'react'
import {UserContext} from "../context/UserProvider"
import {carInfoContext} from "../context/carInfoProvider"
import { logContext } from "../context/logProvider"

import { Button } from 'primereact/button'
import {Link} from 'react-router-dom'

export default (props) => {
    const {logout} = useContext(UserContext)
    const {setLogs, setCarIndex} = useContext(logContext)
    const {setCarInfo, setHasCar} = useContext(carInfoContext)
    useEffect(() => {
        setCarInfo({
            make: "",
            model: "",
            odometer: "",
            year: "",
            imgUrl: "",
            carId: ""
        })
        setLogs([{
            created: "",
            odometer: "",
            gallons: "",
            price: "",
            tankFull: false,
            notes: "",
            car: ""
        }])
        setCarIndex(0)

        setHasCar(false)
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
