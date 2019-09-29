import React from 'react';


const Daily = (props) => {
    console.log(props)
    return (
        <div>
        {props.dailySummary}
        </div>
    )
}

export default Daily