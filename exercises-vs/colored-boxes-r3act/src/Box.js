import React from "react"

function Box(props) {
    return(
        <div className='box'
        style={{
            backgroundColor: props.backgroundColor,
            width: '250px',
            color: 'silver',
            padding: '15px',
            height: '250px',
            margin: '10px auto',
            textAlign: 'center',
            border: '2px dashed #ccc'

        }}
        >

        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p>{props.information}</p>
        </div>
    )
}

export default Box