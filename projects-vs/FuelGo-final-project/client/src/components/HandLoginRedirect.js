import React from 'react'
const red = {
    color: "red"
}

export default (props) => {

    if(props.user._id && !props.err.response){
        props.push('/carInfo/create')
    }

    return (
        <div className="auth-form-element">
            {props.err && <p style={red}>{props.err.response.data.errMsg}</p>}
        </div>
    )
}
