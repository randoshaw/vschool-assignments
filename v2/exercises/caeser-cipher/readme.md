For this exercise, you will be implementing a Caeser cipher using Javascript. Your program will receive two inputs:

The text to be encoded
The number positions to shift each letter (to the right)
For example:
cipher example

You only have to shift letters that are part of the 26-letter alphabet. Any other characters (such as spaces) should be printed as they were received. The shift value will always be on the interval [0, 26].



// let ask = require('readline-sync')
// let input = ask.question('What phrase would you like to encrypt? ').toLowerCase()
// let shift = parseInt(ask.question('How many letters would you like to shift? '))

// const stringArray = input.split('')
// const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// const index = []

// function caeserCipher(input, shift){
//     console.log(input)
//     console.log(shift)
//     console.log(stringArray)
//     console.log(alphabet)
//     for(i = 0; i < stringArray.length; i++){
//         for(j = 0; j < alphabet.length; j++){
//             if (stringArray[i] === alphabet [j]) {
//                 index.push(i)
//             }
//         }
//     }
// }

// console.log(caeserCipher(input, shift))