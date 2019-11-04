import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import LogForm from './LogFormShared'
import authAxios from "../Axios/UserAxios"
import { carInfoContext } from "../context/carInfoProvider"

export default (props) => {
    const {push} = useHistory()
    const {carId} = useContext(carInfoContext)
    const handleSubmit = ({e,state}) => {
        e.preventDefault()
        authAxios.post(`/api/carLog`, {...state,car:carId})
        .then(res => {
            push("/car/loggedSum")
        })
    }
    return (
        <LogForm handleSubmit={handleSubmit} />
    )
}
