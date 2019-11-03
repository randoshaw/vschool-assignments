import React, { useContext, useEffect } from "react";
import Axios from "axios";
import { InputSwitch } from "primereact/inputswitch";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { carInfoContext } from "../context/carInfoProvider"
import { logContext } from "../context/logProvider"
import { UserContext } from "../context/UserProvider"

const authAxios = Axios.create();
authAxios.interceptors.request.use(config => {
    const token = localStorage.getItem ("token")
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

export default props => {
    const {carInfo:{make, model, carId}} = useContext(carInfoContext)
    const {logs, setLogs, carIndex, setCarIndex} = useContext(logContext)

    // const { authAxios } = useContext(UserContext)

    useEffect(() => {
        if(props.match.params.method==="new"){setCarIndex(0)
        setLogs(prev=>{
            return [
                {
                    created: "",
                    odometer: "",
                    gallons: "",
                    price: "",
                    tankFull: false,
                    notes: "",
                    car: ""
                }
            ]
        })
        }
    },[])
    
    
    const handleChange = e => {
    const { value, name } = e.target;
    setLogs(prev => {
        return prev.map((val, index)=>{
            return index === carIndex 
                ? ({...prev[carIndex],[name]:value})
                : val
        })
    })
}

const toggleCheck = (e) => {
    setLogs(prev => ({
        ...prev,
        tankFull : !prev.tankFull
    }))
}

const handleSubmit = e => {
    e.preventDefault();
    console.log(logs);
    if(props.match.params.method==="edit"){
        authAxios.put(`/api/carLog/${logs[carIndex]._id}`, logs[carIndex])
        .then(res => {
            props.history.push("/car/loggedSum")
        })
    }else if(props.match.params.method==="new"){
        console.log("Posting new:",{...logs[0],car:carId});
        authAxios.post(`/api/carLog`, 
        {...logs[0],car:carId})
        .then(res => {
            props.history.push("/car/loggedSum")
        })
    }
}
    return (
        <div className="flex-col">
            <h2>Log Information For Your {make} {model} </h2>
            <form onSubmit= {handleSubmit}>
                {/* <Calendar
                    onChange={handleChange}
                    value={logs[carIndex].created}
                    name="created"
                    dateFormat="mm/dd/yy"
                    showIcon= {true}
                    placeholder="Select Date"
                ></Calendar> */}
                <span className="p-float-label margin">
                    <InputText 
                        id="in"
                        type="number"
                        onChange={handleChange}
                        value={logs[carIndex].odometer}
                        name="odometer"  />
                    <label htmlFor="in">Odometer</label>
                </span>
                <span className="p-float-label margin">
                    <InputText 
                        id="in"
                        type="number"
                        onChange={handleChange}
                        value={logs[carIndex].gallons}
                        name="gallons" />
                    <label 
                        htmlFor="in">Gallons Filled</label>
                </span>                
                <span className="p-float-label margin">
                    <InputText
                    id="in"
                    type="number"
                    onChange={handleChange}
                    value={logs[carIndex].price}
                    name="price" />
                    <label htmlFor="in">Price</label>
                </span>
                Tank Full?{" "}
                <InputSwitch
                    name="tankFull"
                    onChange={toggleCheck}
                    checked={logs[carIndex].tankFull}
                    onLabel="Yes"
                    offLabel="No"
                    tooltip="Select if tank is full"
                />
                <InputTextarea
                    name="notes"
                    onChange={handleChange}
                    value={logs[carIndex].notes}
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
