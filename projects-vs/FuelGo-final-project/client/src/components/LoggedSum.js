import React from 'react'
import {Button} from 'primereact/button'

const carInfo={
    "width":"80vw",
    "border":"2px solid black"
}

const totals={
    "width":"60vw",
    "border":"2px solid black"
}

const loggedCars = {
    "width":"40vw",
    "border":"1px solid black"
}

export default (params) => {
    return (
        <div className="flex-col">
        <div style={carInfo}>
        <h3>Car Information</h3>
        <ul>
            <li>Make: {"honda"}</li>
            <li>Model: {"accord"}</li>
            <li>Year: {"1998"}</li>
        </ul>
        <img src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt='blue car' width="300"/>
        </div>


        <div style ={totals}>
            <h3>Totals</h3>
            <ul>
                <li>Amount Spent on Gas: {"$35.24"} </li>
                <li>Miles Traveled: {"352"}</li>
                <li>Odometer: {"1,432"} </li>
            </ul>
        </div>

        <div style ={loggedCars}>
                <ul>
                    <li>Date: {"10/25/19"}</li>
                    <li>Purchase Amount: {"$35"}</li>
                    <li>Gallons: {"10.5"}</li>
                    <li>Odometer: {"123"}</li>
                </ul>
                <Button label="Edit" className="p-button-raised p-button-warning" />
            </div>

            <div style ={loggedCars}>
                <ul>
                    <li>Date: {"10/25/19"}</li>
                    <li>Purchase Amount: {"$35"}</li>
                    <li>Gallons: {"10.5"}</li>
                    <li>Odometer: {"123"}</li>
                </ul>
                <Button label="Edit" className="p-button-raised p-button-warning" />
            </div>

            <div style ={loggedCars}>
                <ul>
                    <li>Date: {"10/25/19"}</li>
                    <li>Purchase Amount: {"$35"}</li>
                    <li>Gallons: {"10.5"}</li>
                    <li>Odometer: {"123"}</li>
                </ul>
                <Button label="Edit" className="p-button-raised p-button-warning" />            </div>
        </div>
    )
}
