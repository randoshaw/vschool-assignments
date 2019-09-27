import React from 'react'

const Box = (props) => {
    return (
        <div>
            <div style = {{backgroundColor: `#${props.color}`, height: '250px', width: '250px', border: '2px solid black'}}></div>
        </div>
    )
}

export default Box