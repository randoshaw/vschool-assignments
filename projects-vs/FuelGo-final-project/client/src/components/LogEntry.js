import React, { useContext, useEffect } from "react";
import { InputSwitch } from "primereact/inputswitch";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { carInfoContext } from "../context/carInfoProvider"
import { logContext } from "../context/logProvider"
import { UserContext } from "../context/UserProvider"
import "./styles/logEntry.css"

export default props => {
    const {carInfo:{make, model, carId}} = useContext(carInfoContext)
    const {logs, setLogs, carIndex, setCarIndex, getLogs} = useContext(logContext)
    const { authAxios } = useContext(UserContext)

    // useEffect(() => {
    //     console.log("Log Entry", props.location.pathname)
    //     if(props.location.pathname==="/car/logEntry/new"){
    //         setCarIndex(0)
    //         setLogs(prev=>{
    //             return [
    //                 {
    //                     created: new Date(),
    //                     odometer: "",
    //                     gallons: "",
    //                     price: "",
    //                     tankFull: false,
    //                     notes: "",
    //                     car: ""
    //                 }
    //             ]
    //         })
    //     }
    // },[])
    useEffect(() => {
        getLogs(carId)

    },[]
    )
    
    if(props.location.pathname==="/car/logEntry/new"){
        setCarIndex(0)
    }

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
    setLogs(prev => {
        return prev.map((val, index)=>{
            return index === carIndex 
                ? ({...prev[carIndex],tankFull: !prev[carIndex].tankFull})
                : val
        })
    })
    // setLogs(prev => ({
    //     ...prev,
    //     tankFull : !prev.tankFull
    // }))
}

const handleSubmit = e => {
    e.preventDefault();
    console.log("submit Log Entry", props);
    if(props.location.pathname==="/car/logEntry/edit"){
        authAxios.put(`/api/carLog/${logs[carIndex]._id}`, logs[carIndex])
        .then(res => {
            props.history.push("/car/loggedSum")
        })
    }else if(props.location.pathname==="/car/logEntry/new"){
        console.log("Posting new:",{...logs[0],car:carId});
        authAxios.post(`/api/carLog`, 
        {...logs[0],car:carId})
        .then(res => {
            props.history.push("/car/loggedSum")
        })
    }
}
    var calendarDate = ""
    if(logs[carIndex]){

        const date = new Date(logs[carIndex].created)
        const month = date.getMonth()+1
        const day = date.getDate()+1
        const year = date.getFullYear()
        calendarDate = `${month}/${day}/${year}`
    }
    else{
        
    }
    

    return (
        <div className="log-entry-form">
            <div style={{fontSize:"120%"}}>Log Information For Your {make} {model} </div>
            <form onSubmit= {handleSubmit}>
                {/* <Calendar
                    onChange={handleChange}
                    value={logs[carIndex].created}
                    name="created"
                    dateFormat="mm/dd/yy"
                    showIcon= {true}
                    placeholder="Select Date"
                ></Calendar> */}
                <p>{calendarDate}</p>
                <span className="p-float-label margin large-font">
                    <InputText 
                        className="large-font"
                        id="in"
                        type="date"
                        onChange={handleChange}
                        value={logs[carIndex].created}
                        // value={calendarDate}
                        name="created"  />
                    <label htmlFor="in">Date</label>
                </span>

                <span className="p-float-label margin large-font">
                    <InputText 
                        className="large-font"
                        id="in"
                        type="number"
                        onChange={handleChange}
                        value={logs[carIndex].odometer}
                        name="odometer"  />
                    <label htmlFor="in">Odometer</label>
                </span>
                <span className="p-float-label margin large-font">
                    <InputText 
                        className="large-font"
                        id="in"
                        type="number"
                        onChange={handleChange}
                        value={logs[carIndex].gallons}
                        name="gallons" />
                    <label 
                        htmlFor="in">Gallons Filled</label>
                </span>                
                <span className="p-float-label margin large-font">
                    <InputText
                        className="large-font"
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
                <div>
                <InputTextarea
                        className="large-font"
                        name="notes"
                        onChange={handleChange}
                        value={logs[carIndex].notes}
                        rows={5}
                        cols={22}
                        autoResize={true}
                        placeholder="Log Notes"
                />
                </div>
                    
                <div>
                    <Button label="Submit"
                    className="p-button-raised"/>
                </div>
            </form>
         
        </div>
    );
};
