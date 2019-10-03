import React from 'react'
import Day from './Week/Day'


const Weekly = props => {
  const mappedDays = props =>
    props.days.map((day, id) => (
      <div key={id}>
        <Day dayNum={id} dayData={day} />
      </div>
    ))

  return (
    <div className="weekly-container">
      {props.state ? (
        <h2>
          Weekly forecast for {props.city} {props.state}
        </h2>
      ) : (
        <h2> </h2>
      )}

      {mappedDays(props.weeklyData)}
    </div>
  )
}

export default Weekly
