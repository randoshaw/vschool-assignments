import React, { useContext } from "react";
import { Button } from "primereact/button/";
import { carInfoContext } from "../context/carInfoProvider"
import { UserContext } from "../context/UserProvider"
import Axios from "axios"
// make a new carinfo post, and save id on signup or if no info exists
// get carinfo by user
//      GET '/api/carInfo/user'
// display carinfo on our form values
//      then setstate with carinfo
// on submit, PUT the new updated values to carinfo in db
//      PUT '/api/carInfo/:id'

const authAxios = Axios.create();
authAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

const CarInfo = props => {
    const { carInfo, handleChange } = useContext(carInfoContext)
    // const { authAxios } = useContext(UserContext)

    const goBack = e => {
        e.preventDefault();
        props.history.goBack();
    };

    

    const handleSubmit = e => {
        e.preventDefault();
        console.log(carInfo)
        authAxios
            .put(`/api/carInfo/${carInfo.carId}`, carInfo)
            .then(res => {
                props.history.push("/car/logEntry/new")}
                )
            .catch(err => console.log(err));
    };

    return (
        <div className="flex-col">
            <h2>{props.title} Your Car Information</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="make"
                    value={carInfo.make}
                    placeholder="Make"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="model"
                    value={carInfo.model}
                    placeholder="Model"
                    onChange={handleChange}
                />
                <input
                    type="Number"
                    name="year"
                    value={carInfo.year}
                    placeholder="Year"
                    onChange={handleChange}
                />
                <input
                    type="Number"
                    name="odometer"
                    value={carInfo.odometer}
                    placeholder="Odometer"
                    onChange={handleChange}
                />
                <input
                    type="url"
                    name="imgUrl"
                    value={carInfo.imgUrl}
                    placeholder="Upload ImgUrl"
                    onChange={handleChange}
                />
                <Button label="Submit" className="p-button-raised" />
                { props.cancelButton
                    &&
                    <Button
                        label="Cancel"
                        className="p-button-raised p-button-warning"
                        onClick={goBack}
                    />
                }
            </form>
        </div>
    );
};

export default CarInfo