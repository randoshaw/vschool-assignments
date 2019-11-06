import React from 'react'

const container = {
    marginTop: 25,
    // padding: "25px 0",
    height: 175,
    backgroundColor: "grey",
    textAlign: "center",
    // display: "flex",
    // justifyContent: "space-around"
}
const p = {
    fontSize: 18,
    marginBottom: -12
}

const logos = {
    fontSize: 75,
    marginBottom: -10,
    color: "#ffbb00",
}

const logoContainer = {
    display: "flex",
    // justifyContent: "space-around"
    justifyContent: "space-evenly",
}

export default (props) => {
    return (
    
        <div style={container}>
            {/* // <div style={footer}> */}
            <p style={p}><b>Fuel-Go!</b> A full stack project by Randon Shaw</p>
            <div style={logoContainer}>
            <h5><a href="https://github.com/randoshaw"><i style={logos} class="fa fa-github-square" aria-hidden="true"></i></a></h5>

            <h5><a href="https://linkedin.com/in/randonshaw"><i style={logos} class="fa fa-linkedin-square" aria-hidden="true"></i></a></h5>
            </div>
        </div>
    )
}
