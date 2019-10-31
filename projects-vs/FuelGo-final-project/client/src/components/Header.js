import React from "react";
const style = {
    "background-color": "red",
    "font-size": "75px",
    "text-align": "center"
};

export default params => {
    return (
        <div className="header">
            <h1 style={style}>Fuel-Go App</h1>
            {/* <h3>The App that tracks your fuel expenses on the go!</h3> */}
        
        </div>
    );
};
