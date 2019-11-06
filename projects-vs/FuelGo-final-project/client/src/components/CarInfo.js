import React, { useContext, useEffect } from "react";
import { Button } from "primereact/button/";
import { InputText } from "primereact/inputtext";
import { carInfoContext } from "../context/carInfoProvider"
import authAxios from "../Axios/UserAxios"

const CarInfo = props => {
    const { carInfo, handleChange, hasCar, getCar } = useContext(carInfoContext)

    useEffect(() => {
        getCar()    
    },[]);

    const goBack = e => {
        e.preventDefault();
        props.history.goBack();
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        if(props.location.pathname==="/carInfo/create"){
            authAxios
            .post(`/api/carInfo`, carInfo)
            .then(res => {
                props.history.push("/car/logEntry/new")}
                )
            .catch(err => console.log(err));
        }else{
            authAxios
            .put(`/api/carInfo/${carInfo.carId}`, carInfo)
            .then(res => {
                props.history.push("/car/logEntry/new")}
                )
            .catch(err => console.log(err));
        }

        
    };
    if(hasCar && props.location.pathname==="/carInfo/create"){
        props.history.push("/car/logEntry/new")
    }
    return (
        <div className="flex-col">
            <h2>{props.title} Your Car Information</h2>
            <form onSubmit={handleSubmit}>

            <span className="p-float-label margin large-font">
                <InputText 
                    className="large-font"
                    id="in"
                    type="text"
                    onChange={handleChange}
                    value={carInfo.make || ""}
                    name="make"/>
                <label htmlFor="in">Make</label>
            </span>
            <span className="p-float-label margin large-font">
                <InputText 
                    className="large-font"
                    id="in"
                    type="text"
                    onChange={handleChange}
                    value={carInfo.model || ""}
                    name="model"/>
                <label htmlFor="in">Model</label>
            </span>
            <span className="p-float-label margin large-font">
                <InputText 
                    className="large-font"
                    id="in"
                    type="number"
                    onChange={handleChange}
                    value={carInfo.year || ""}
                    name="year"/>
                <label htmlFor="in">Year</label>
            </span>
            {/* <span className="p-float-label margin large-font">
                <InputText 
                    className="large-font"
                    id="in"
                    type="number"
                    onChange={handleChange}
                    value={carInfo.odometer || ""}
                    name="odometer"/>
                <label htmlFor="in">Odometer</label>
            </span> */}
            <span className="p-float-label margin large-font">
                <InputText 
                    className="large-font"
                    id="in"
                    type="url"
                    onChange={handleChange}
                    value={carInfo.imgUrl || ""}
                    name="imgUrl"/>
                <label htmlFor="in">Upload Image Url</label>
            </span>
            <div className="carInfoButtons">
                <Button label="Submit" className="p-button-raised" />
                { props.cancelButton
                    &&
                    <Button
                        label="Cancel"
                        className="p-button-raised p-button-warning"
                        onClick={goBack}
                    />
                }
                </div>
            </form>
        </div>
    );
};

export default CarInfo