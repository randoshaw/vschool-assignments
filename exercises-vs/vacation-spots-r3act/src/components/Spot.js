import React from 'react'

const Spot = ({location, price, timeToGo}) => {
    return (
        <section>
        <h1>{location}</h1>
        <h4>{price}</h4>
        <h2>{timeToGo}</h2>
        </section>
    )
}

export default Spot;
