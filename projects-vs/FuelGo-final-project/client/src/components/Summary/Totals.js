import React, {useState, useEffect, useContext} from 'react'
import { carInfoContext } from "../../context/carInfoProvider";
import authAxios from "../../Axios/UserAxios"

export default (props) => {
    const {carInfo:{carId}} = useContext(carInfoContext)
    const [ totals, setTotals ] = useState({
        amountSpent: "loading",
        milesTravelled: "loading",
        odometer: "loading"
    })
    
    useEffect(() => {
        authAxios.get(`/api/totals/${carId}`).then(res=>{
            setTotals(res.data)
        })
    },[])

    return (
        <div className ="totals">
            <div className="item-header">Totals</div>
            <div>
                <div>${totals.amountSpent} Spent on Gas</div>
                <div>{totals.milesTravelled} Miles Traveled</div>
                <div>Current Odometer: {totals.odometer} </div>
            </div>
        </div>
    )
}
