import React, { useContext, useState } from "react";
import { Button } from "primereact/button/";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import HandleLoginRedirect from "./HandLoginRedirect"
import { UserContext } from "../context/UserProvider" 
import "./styles/authForm.css"
// File where useContext is coming from. useContext has provider, consumer and higher order component (what the consuming component uses) all built in one
// import HandleSignUpRedirect from "./HandleSignUpRedirect";

export default props => {
    const { login, user, authErrMsg, signup } = useContext(UserContext)
    const [ state, setState ] = useState({username:"",password:""})
    const [ path, setPath ] = useState("/")

    const handleLogin = async () => {
        await setPath("/car/logentry/new")
        await login(state)
    }
    
    const handleSignUp = async () => {
        await setPath("/carInfo/create")
        await signup(state)
    }
    

    const handleChange = (e) => {
        const { name, value } = e.target
        setState(prev=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <div className="auth-form-container">
            <span className="p-float-label margin large-font auth-form-element">
                <InputText 
                    name="username"
                    value={state.username}
                    onChange = {handleChange} id="username" />
                <label htmlFor="username">Username</label>
            </span>

            <span className="p-float-label margin large-font auth-form-element">
                <label htmlFor="password">Password</label>
                <Password 
                    name="password"
                    value={state.password}
                    onChange = {handleChange} id="password" feedback={false}/>
            </span>
            <div className="auth-form-element" style={{
                display: "flex",
                justifyContent: "space-evenly",
                margin: 20
            }}>
                <Button label="Login" className="p-button-success p-button-raised" 
                    onClick = { handleLogin }/>
                <Button label="Sign Up" className="p-button-raised" 
                    onClick = { handleSignUp }/>
            </div>
            
            <HandleLoginRedirect 
                err={authErrMsg} 
                user={user} 
                push={props.history.push}/>
            {/* <HandleSignUpRedirect 
                err={authErrMsg}
                user={user}
                push={props.history.push}
            /> */}
        </div>
    );
};
