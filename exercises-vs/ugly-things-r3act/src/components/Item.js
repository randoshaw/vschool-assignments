import React from 'react'

const Item = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.imgUrl} alt={props.title} width = {300}/>
            <button onClick={props.deleteItem}>Delete</button>
        </div>
    )
}


export default Item;