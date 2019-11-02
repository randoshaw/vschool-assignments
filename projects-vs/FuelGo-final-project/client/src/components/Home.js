import React from "react";
import { Button } from "primereact/button/";
import { InputText } from "primereact/inputtext";

export default props => {
    return (
        <div>
            <span className="p-float-label margin">
                <InputText id="in" />
                <label htmlFor="in">Username</label>
            </span>
            <span className="p-float-label margin">
                <InputText id="in" />
                <label htmlFor="in">Password</label>
            </span>
            <Button label="Login" className="p-button-success p-button-raised" onClick = {
                () => props.history.push('/car/logentry/new')}/>
            <Button label="Sign Up" className="p-button-raised" onClick = {() => props.history.push('/carInfo/create')}/>
            {/* <form>
                <input
                    type="text"
                    name="username"
                    value=""
                    placeholder="username"
                />
                <p>Enter Your Password:</p>
                <input
                    type="text"
                    name="password"
                    value=""
                    placeholder="password"
                />
            </form> */}
        </div>
    );
};
