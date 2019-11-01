import React, {useState} from 'react'
import { Button } from "primereact/button/";

export default (props) => {

    // // non-destructured
    // const hook = useState({})
    // const state = hook[0]
    // const setState = hook[1]
    // setState({hi:"hi"})
    // console.log(state)
    const [state, setState] = useState()


    const goToLoggedSummary = e => {
        e.preventDefault()
       
        props.history.push("/car/logEntry")
        } 
    const goBack = e => {
        e.preventDefault()
        props.history.goBack()
    }

    const handleChange = (e) => {
        
    }

    return (
        <div className="flex-col">
        <h2>{props.title} Your Car Information</h2>
        <form  >
        <input
                    type="text"
                    name="make"
                    value=""
                    placeholder="Make"
                    onChange={handleChange}
                />
        <input
                    type="text"
                    name="model"
                    value=""
                    placeholder="Model"
                />
        <input
                    type="Number"
                    name="year"
                    value=""
                    placeholder="Year"
                />
        <input
                    type="Number"
                    name="odometer"
                    value=""
                    placeholder="Odometer"
                />
        <input
                    type="text"
                    name="imgUrl"
                    value=""
                    placeholder="Upload ImgUrl"
                />
<Button label="Submit" className="p-button-raised" onClick={goToLoggedSummary}/>
<Button label="Cancel" className="p-button-raised p-button-warning" onClick={goBack}/>
        </form>
        </div>
    )
}
