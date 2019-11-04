import React from 'react'

const container={
    marginTop: 50,
    padding: "50px 0",
    height: 350,
    backgroundColor: "grey",
    textAlign: "center",
}
const p = {
    fontSize: 18
}

export default (props) => {
    return (
        <div style={container}>
            <p style={p}><b>Fuel-Go!</b> A full stack project by Randon Shaw</p>
            <p style={p}>GitHub</p>
            <p style={p}>My Portfolio</p>
        </div>
    )
}
