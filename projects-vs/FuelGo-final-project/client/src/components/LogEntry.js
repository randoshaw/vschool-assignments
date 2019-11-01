import React from "react";
import { InputSwitch } from "primereact/inputswitch";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";

export default props => {
    const goToLoggedSum = (e) => {
        e.preventDefault()
        props.history.push("/car/loggedSum")
    }
    

    return (
        <div className="flex-col">
            <h2>Log Information For Your {"Geo"} {"Metro"}</h2>
            <form>
                <Calendar
                    dateFormat="dd/mm/yy"
                    showIcon="true"
                    placeholder="Select Date"
                ></Calendar>
                <span className="p-float-label margin">
                    <InputText id="in" type="number" name="odometer" />
                    <label htmlFor="in">Odometer</label>
                </span>
                <span className="p-float-label margin">
                    <InputText id="in" type="number" name="gallons" />
                    <label htmlFor="in">Gallons Filled</label>
                </span>                <span className="p-float-label margin">
                    <InputText id="in" type="number" name="price" />
                    <label htmlFor="in">Price</label>
                </span>
                Tank Full?{" "}
                <InputSwitch
                    onLabel="Yes"
                    offLabel="No"
                    tooltip="Select if tank is full"
                />
                <InputTextarea
                    rows={5}
                    cols={30}
                    autoResize={true}
                    placeholder="Log Notes"
                />
            </form>
            <Button label="Submit" className="p-button-raised"
            onClick={goToLoggedSum}/>
        </div>
    );
};
