import React, { useState, useContext } from "react";
import Axios from "axios";
import { InputSwitch } from "primereact/inputswitch";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { carInfoContext } from "../context/carInfoProvider"

const authAxios = Axios.create();
authAxios.interceptors.request.use(config => {
    const token = localStorage.getItem ("token")
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

export default props => {
    const {carInfo:{make, model, carId}} = useContext(carInfoContext)
    console.log("carid",carId)
    const initState = {
        calendar: "",
        odometer: "",
        gallons: "",
        price: "",
        tankFull: false,
        notes: "",
    }

    // useState returns an array of two items. 1st is state set to initial state. 2nd is a function, when called will update the state. 
    // const arr = useState(initState)
    // const state = arr[0]
    // const setState = arr[1]
    
const [state, setState] = useState(initState)

const handleChange = e => {
    console.log("handleChange")
    const { value, name } = e.target;
    setState(prev => ({
        ...prev,
        [name]: value
    }))
}

const toggleCheck = (e) => {
    console.log(e.target)
    setState(prev => ({
        ...prev,
        tankFull : !prev.tankFull
    }))
}

const handleSubmit = e => {
    e.preventDefault();
    authAxios.post("/api/carLog", {...state, car: carId})
    .then(res => {
        console.log(res)
        props.history.push("/car/loggedSum")
    })
}

    return (
        <div className="flex-col">
            <h2>Log Information For Your {make} {model} {state.car}</h2>
            <form onSubmit= {handleSubmit}>
                <Calendar
                    onChange={handleChange}
                    value={state.calendar}
                    name="calendar"
                    // value="calendar"
                    dateFormat="dd/mm/yy"
                    showIcon= {true}
                    placeholder="Select Date"
                ></Calendar>
                <span className="p-float-label margin">
                    <InputText 
                        id="in"
                        type="number"
                        onChange={handleChange}
                        value={state.odometer}
                        name="odometer"  />
                    <label htmlFor="in">Odometer</label>
                </span>
                <span className="p-float-label margin">
                    <InputText 
                        id="in"
                        type="number"
                        onChange={handleChange}
                        value={state.gallons}
                        name="gallons" />
                    <label 
                        htmlFor="in">Gallons Filled</label>
                </span>                
                <span className="p-float-label margin">
                    <InputText
                    id="in"
                    type="number"
                    onChange={handleChange}
                    value={state.price}
                    name="price" />
                    <label htmlFor="in">Price</label>
                </span>
                Tank Full?{" "}
                <InputSwitch
                    name="tankFull"
                    onChange={toggleCheck}
                    checked={state.tankFull}
                    onLabel="Yes"
                    offLabel="No"
                    tooltip="Select if tank is full"
                />
                <InputTextarea
                    name="notes"
                    onChange={handleChange}
                    value={state.notes}
                    rows={5}
                    cols={30}
                    autoResize={true}
                    placeholder="Log Notes"
                />
                   <Button label="Submit"
                   className="p-button-raised"/>
            </form>
         
        </div>
    );
};
