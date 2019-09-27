import React from 'react'

const People = (props) => {
    const {name, image} = props

    return(
        <div className='individualPersonContainer'>
            <img src={image} className='personImage'></img>
            <h2 className='personHeading'> {name} </h2>
        </div>
    )
        
    
}

export default People