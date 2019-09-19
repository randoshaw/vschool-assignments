import React from 'react'
import Card from './Card.js'

const App = () => {

    let vacations = [
    {
        place: "Paris, France",
        price: 4000,
        timeToGo: "Spring"
    },{
        place: "Billings, Montana",
        price: 200,
        timeToGo: "Summer"
    },{
        place: "Pittsburgh, PA",
        price: 900,
        timeToGo: "Autumn"
    },{
        place: "Honolulu, HI",
        price: 1500,
        timeToGo: "Winter"
    }
]

const mappedVacations = vacations.map((vacation, i) =>
<Card
    place={vacation.place}
    price={vacation.price}
    timeToGo={vacation.timeToGo}
    />
)

return (
    <div className='app-container'>
        {mappedVacations}
    </div>
    )
}


export default App;