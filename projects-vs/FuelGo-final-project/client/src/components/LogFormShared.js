import React, {useState} from 'react'
import { InputSwitch } from "primereact/inputswitch";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import './styles/logEntry.css'

export default props => {
    console.log("Log Form props", props)

    const [state, setState] = useState((props.edit || {}))

    const handleChange = e => {
        const {name, value} = e.target
        setState(prev=>({...prev,[name]:value}))
    }
    const handleSubmit = e => {
        console.log("Submitting Log Form")
        console.log("Log Form props", props)
        console.log("Log Form state", state)
        props.handleSubmit({e,state})
    }

    const toggleCheckBox = e => {
        setState(prev=>({...prev,tankFull: !prev.tankFull}))
    }

    return (
        <div className="log-entry-form">
        {/* <div style={{fontSize:"120%"}}>Log Information For Your {make} {model} </div> */}
        <form onSubmit= {handleSubmit}>
            {/* <Calendar
                id="calendar"
                onChange={handleChange}
                value={"2019-11-20"}
                name="created"
                dateFormat="mm/dd/yy"
                showIcon= {true}
                placeholder="Select Date"
            ></Calendar> */}
            {/* <p>{calendarDate}</p> */}
            <span className="p-float-label margin large-font">
                <InputText 
                    className="large-font"
                    id="in"
                    type="date"
                    onChange={handleChange}
                    value={state.created || ""}
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
                    value={state.odometer || ""}
                    name="odometer"  />
                <label htmlFor="in">Odometer</label>
            </span>
            <span className="p-float-label margin large-font">
                <InputText 
                    className="large-font"
                    id="in"
                    type="number"
                    onChange={handleChange}
                    value={state.gallons || ""}
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
                    value={state.price || ""}
                    name="price" />
                    <label htmlFor="in">Price</label>
            </span>
            Tank Full?{" "}
            <InputSwitch 
                    name="tankFull"
                    onChange={toggleCheckBox}
                    checked={state.tankFull}
                    onLabel="Yes"
                    offLabel="No"
                    tooltip="Select if tank is full"
            />
            <div>
            <InputTextarea
                    className="large-font"
                    name="notes"
                    onChange={handleChange}
                    value={state.notes}
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
    )
}
