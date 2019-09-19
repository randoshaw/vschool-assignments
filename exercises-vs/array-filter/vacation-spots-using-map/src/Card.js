import React from 'react'

function Card(props) {

    const color = (color) => {
        if(color === "Spring"){
            return {
                backgroundColor: 'green',
                display: 'inline-grid',
                width: '400px',
                textAlign: 'center',
                alignContent: 'center'
            }
        } else if(color === "Summer"){
            return {
                backgroundColor: 'yellow',
                display: 'inline-grid',
                width: '400px',
                textAlign: 'center',
                alignContent: 'center'
            }
        } else if(color === "Autumn"){
            return {
                backgroundColor: 'red',
                display: 'inline-grid',
                width: '400px',
                textAlign: 'center',
                alignContent: 'center'
            }
        } else if(color === "Spring"){
            return {
                backgroundColor: 'blue',
                display: 'inline-grid',
                width: '400px',
                textAlign: 'center',
                alignContent: 'center'
            }
        } else {
            return {
                backgroundColor: 'purple',
                display: 'inline-grid',
                width: '400px',
                textAlign: 'center',
                alignContent: 'center'
            }
        }
    }

    const cost = (price) => {
        if(price < 500){
            return '$'
        } else if (price > 500 && price < 1000) {
            return '$$'
        } else {
            return '$$$'
        }
    }
    
    return (
        <div className="card" style={color(props.timeToGo)}>
            <h1>{props.place}</h1>
            <p>{cost(props.price)}</p>
            <p>{props.timeToGo}</p>
        </div>
    )
}


export default Card