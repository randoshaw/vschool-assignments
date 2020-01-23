import React from 'react'
import Pet from './Pet'

const Friend = props => {
	const petFriends = props.pets.map(petList => {
		return <Pet name={petList.name} breed={petList.breed} />
	})

	return (
		<main>
			<h2>Friend: </h2>
			<h3>Name: {props.name}</h3>
			<h4>Age: {props.age}</h4>
			{petFriends}
		</main>
	)
}

export default Friend
