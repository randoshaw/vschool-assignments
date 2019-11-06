import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import LogForm from './LogFormShared'
import authAxios from "../../Axios/UserAxios"
import { carInfoContext } from "../../context/carInfoProvider"
import { logContext } from "../../context/logProvider"

export default (props) => {
    const {push} = useHistory()
    const {carId} = useContext(carInfoContext)
    const {logs, carIndex} = useContext(logContext)
    const log = logs[carIndex]

    const handleSubmit = ({e,state}) => {
        e.preventDefault()
        authAxios.put(`/api/carLog/${log._id}`, {...state,car:carId})
        .then(res => {
            push("/car/loggedSum")
        })
    }
    return (
        <LogForm handleSubmit={handleSubmit} edit={log}/>
    )
}
