const readline = require('readline-sync')
const input = readline.question('What phrase would you like to encrypt? ').toLowerCase()
const shift = parseInt(readline.question('How many letters would you like to shift? '))
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let emptyArr = ''

for(i = 0; i < input.length; i++){
    if (input[i]=== ''){
        emptyArr += input[i]
    } else {
        const index = alphabet.indexOf(input[i])
        emptyArr += alphabet[(index+shift) % 26]
    }
}

console.log(emptyArr)