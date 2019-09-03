// const ask = require('readline-sync')
// ​
// let gameOver = false
// let hasKey = false
// const userOptions = ["Put hand in hole", "Open the Door", "Find the Key"]
// ​
// while(!gameOver){
//     const userAnswer = ask.keyInSelect(userOptions, "What would you like to do?")
// ​
//     if(userAnswer === 0){
//         console.log('you ded')
//         gameOver = true
//     } else if(userAnswer === 1){
//         if(hasKey){
//             console.log("You win big time")
//             gameOver = true
//         } else {
//             console.log("You need to find a key")
//         }
//     } else if(userAnswer === 2){
//         console.log(" you found da key")
//         hasKey = true
//     } else if(userAnswer === -1){
//         console.log("Can't cancel")
//     }  
// ​
// }
const ask = require('readline-sync')
​
let gameOver = false
let hasKey = false
const userOptions = ["Put hand in hole", "Open the Door", "Find the Key"]
​
while(!gameOver){
    const userAnswer = ask.keyInSelect(userOptions, "What would you like to do?")
​
    if(userAnswer === 0){
        console.log('you ded')
        gameOver = true
    } else if(userAnswer === 1){
        if(hasKey){
            console.log("You win big time")
            gameOver = true
        } else {
            console.log("You need to find a key")
        }
    } else if(userAnswer === 2){
        console.log(" you found da key")
        hasKey = true
    } else if(userAnswer === -1){
        console.log("Can't cancel")
    }  
​
}