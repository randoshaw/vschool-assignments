import React from 'react'
import Box from './Box.js'

const App = () => {
    const box1 = {
        backgroundColor: 'red',
        title: 'This box is red',
        subtitle: 'The redest box that ever was',
        information: 'Not much else to say!'
    }
    const box2 = {
        backgroundColor: 'blue',
        title: 'This box is blue',
        subtitle: 'The blue-est of blue boxes',
        information: 'My favorite color is blue :)'
    }
    const box3 = {
        backgroundColor: 'green',
        title: 'This box is green',
        subtitle: 'The greeniest green that was ever green',
        information: 'This box is under the blue box'
    }
    const box4 = {
        backgroundColor: 'yellow',
        title: 'A yellow box!',
        subtitle: 'Good luck trying to read this!',
        information: 'White text on a yellow background is no bueno'
    }
    const box5 = {
        backgroundColor: 'orange',
        title: 'The orange box',
        subtitle: 'orange soda is life',
        information: 'orange oranges are my favorite fruit'
    }
    const box6 = {
        backgroundColor: 'pink',
        title: 'A pink box',
        subtitle: 'pink stinks',
        information: 'pink bubblegum is the only pink I like'
    }
    const box7 = {
        backgroundColor: 'purple',
        title: 'Puuuurple',
        subtitle: 'Purple turtle',
        information: 'The 7th box is purple!',
    }
    const box8 = {
        backgroundColor: 'dodgerblue',
        title: 'This box is colored dodgerblue',
        subtitle: 'numero ocho',
        information: 'dodgerblue is an excellent hue of blue'
    }
    const box9 = {
        backgroundColor: 'brown',
        title: 'A boring brown box',
        subtitle: 'There are too many dang boxes',
        information: 'This box is the second to last box'
    }
    const box10= {
        backgroundColor: 'grey',
        title: 'the last box is grey',
        subtitle: 'this is the last box. Yay!',
        information: 'The amount of boxes is too damn high!'
    }


return (
    <div>
        <Box backgroundColor={box1.backgroundColor} title={box1.title} subtitle={box1.subtitle} information={box1.information}/>
        <Box backgroundColor={box2.backgroundColor} title={box2.title} subtitle={box2.subtitle} information={box2.information}/>
        <Box backgroundColor={box3.backgroundColor} title={box3.title} subtitle={box3.subtitle} information={box3.information}/>
        <Box backgroundColor={box4.backgroundColor} title={box4.title} subtitle={box4.subtitle} information={box4.information}/>
        <Box backgroundColor={box5.backgroundColor} title={box5.title} subtitle={box5.subtitle} information={box5.information}/>
        <Box backgroundColor={box6.backgroundColor} title={box6.title} subtitle={box6.subtitle} information={box6.information}/>
        <Box backgroundColor={box7.backgroundColor} title={box7.title} subtitle={box7.subtitle} information={box7.information}/>
        <Box backgroundColor={box8.backgroundColor} title={box8.title} subtitle={box8.subtitle} information={box8.information}/>
        <Box backgroundColor={box9.backgroundColor} title={box9.title} subtitle={box9.subtitle} information={box9.information}/>
        <Box backgroundColor={box10.backgroundColor} title={box10.title} subtitle={box10.subtitle} information={box10.information}/>

    </div>
)
}


export default App
