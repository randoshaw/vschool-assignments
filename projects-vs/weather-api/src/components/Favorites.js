import React from 'react'

const Favorites = (props) => {
    // console.log('Favorites props', props)
    const mappedFavs = (props) => props.map((loc,id) => 
    <li key={id}>
       
       {loc.city} {loc.state}:     {loc.summary}
    </li>)

    return (
        <div className='favorites-container'>
            <h2>Favorites</h2>
            <ul>{mappedFavs(props.favs)}</ul>
        </div>
    )
}

export default Favorites