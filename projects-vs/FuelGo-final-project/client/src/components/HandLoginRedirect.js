import React from 'react'
const red = {
    color: "red"
}

export default (props) => {

    if(props.user._id && !props.err.response){
        props.push('/carInfo/create')
    }

    console.log("Handling Login Redirect",props)
    return (
        <div>
            {props.err && <p style={red}>{props.err.response.data.errMsg}</p>}
        </div>
    )
}
