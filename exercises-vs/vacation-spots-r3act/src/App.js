import React from 'react';
import './App.css';
import Spot from './components/Spot'

let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }
]

function App() {
  const vacaSpots = vacationSpots.map(spots => {
    return (
      <Spot location ={spots.place} price={spots.price} timeToGo={spots.timeToGo} />
    )
  })

  return (
    <>
    <h1 class= "header">Vacation Hot Spots</h1>
    {vacaSpots}
    </>
  );
}

export default App;
