import React from 'react'

const Pet = props => {
	return (
		<section>
			<h2>Pet: </h2>
			<h3>Name: {props.name}</h3>
			<h4>Breed:{props.breed}</h4>
		</section>
	)
}

export default Pet
