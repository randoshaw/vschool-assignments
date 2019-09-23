import React from 'react';

// export default () => {
//     return (
//         <div>die</div>
//     )
// }

const Die = (props) => {
    function newdie(value, index, array){

        return <div className = 'die' key = {index}>{value}</div>
    }

   const newArr = props.num.map(newdie)

    return newArr
}

export default Die