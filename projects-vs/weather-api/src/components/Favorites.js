import React from 'react'

const Favorites = (props) => {

    const mappedFavs = (props) => props.map((loc,id) => <div key={id}>
        <div> {loc.city} {loc.state}</div>
    </div>)

    return (
        <div>
            Favorites
            {mappedFavs(props.favs)}
        </div>
    )
}

export default Favorites