import React from 'react'
import {InputSwitch} from 'primereact/inputswitch';


export default (props) => {
    return (
        <>
        <h2>Fuel Log</h2>
        <form>
        <input
                    type="date"
                    name="date"
                    value=""
                />
        <input
                    type="number"
                    name="odometer"
                    value=""
                    placeholder="Odometer"
                />
        <input
                    type="number"
                    name="gallons"
                    value=""
                    placeholder="Gallons Filled"
                />
        <input
                    type="number"
                    name="price"
                    value=""
                    placeholder="Cost Amount"
                />
                Tank Full? <InputSwitch onLabel="Yes" offLabel="No" tooltip="Select if tank is full"/>

        <input
                    type="text"
                    name="notes"
                    value=""
                    placeholder="Additional Details"
                />
                </form>
                <button>Submit</button>
                </>
    )
}
