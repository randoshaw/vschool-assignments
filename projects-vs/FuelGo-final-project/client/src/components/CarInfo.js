import React from 'react'

export default (props) => {
    return (
        <>
        <h2>{props.title} Your Car Information</h2>
        <form>
        <input
                    type="text"
                    name="make"
                    value=""
                    placeholder="Make"
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
        <button>Submit</button>
        <button>Cancel</button>
        </form>
        </>
    )
}
