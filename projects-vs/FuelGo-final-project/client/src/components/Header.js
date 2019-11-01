import React from "react";
const style = {
    "backgroundColor": "red",
    "fontSize": "50px",
    "textAlign": "center",
    "marginBottom": "20px"
};

export default params => {
    return (
        <div className="header">
            <h1 style={style}>Fuel-Go App</h1>
            {/* <h3>The App that tracks your fuel expenses on the go!</h3> */}
        
        </div>
    );
};
