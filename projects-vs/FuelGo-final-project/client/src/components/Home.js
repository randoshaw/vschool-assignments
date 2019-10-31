import React from "react";
import { Button } from "primereact/button/";
import { InputText } from "primereact/inputtext";

export default params => {
    return (
        <div>
            <span className="p-float-label">
                <InputText id="in" value="" />
                <label htmlFor="in">Username</label>
            </span>
            <span className="p-float-label">
                <InputText id="in" value="" />
                <label htmlFor="in">Password</label>
            </span>
            <button>Login</button>
            <Button label="Sign Up"></Button>
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
