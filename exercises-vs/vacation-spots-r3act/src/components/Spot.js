import React from 'react'

// Destructuring
// const Spot = ({location, price, timeToGo}) => {
//     return (
//         <section>
//         <h1>{location}</h1>
//         <h4>{price}</h4>
//         <h2>{timeToGo}</h2>
//         </section>
//     )
// }

// Using props
function Spot(props) {
    return(
        <section>
            <h1>{props.location}</h1>
            <h4>${props.price}</h4>
            <h2>{props.timeToGo}</h2>
        </section>
    )
}

export default Spot;
