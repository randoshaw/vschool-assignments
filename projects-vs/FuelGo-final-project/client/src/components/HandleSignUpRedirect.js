import React from 'react'
const red = {
    color: "red"
}

export default (props) => {

    if(props.user._id && !props.err){
        props.push('/carInfo/create')
    }

    return (
        <div>
            {props.err && <p style={red}>{props.err}</p>}
        </div>
    )
}
