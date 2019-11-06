import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import LogForm from './LogFormShared'
import authAxios from "../../Axios/UserAxios"
import { carInfoContext } from "../../context/carInfoProvider"

export default (props) => {
    const {push} = useHistory()
    // const {carId, carInfo: {make, model}} = useContext(carInfoContext)
    const value = useContext(carInfoContext)
    const {carId} = value
    // const carId = value.carId
    const handleSubmit = ({e,state}) => {
        e.preventDefault()
        authAxios.post(`/api/carLog`, {...state,car:carId})
        .then(res => {
            push("/car/loggedSum")
        })
    }
    return (
        <>
        <h2 style={{textAlign: "center"}}>Enter a Log for your {value.carInfo.make} {value.carInfo.model}</h2>

        <LogForm handleSubmit={handleSubmit} />
        </>
    )
}
