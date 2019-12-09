// 1. Write a function that takes an array of numbers and returns the largest (without using Math.max())

// largest([3, 5, 2, 8, 1]) // => 8

// const array = [3, 5, 2, 8, 1];
// const sorted = array.sort(function(a, b) {
//     return a - b})
// console.log(sorted)
// console.log(`${sorted[0]}`)

// function largest(sorted){
//     for(i = 0; i < sorted.length; i++){

//     }
//     console.log(`the largest number is ${sorted[0]}`)
// }

// largest(sorted)

let arr = [3, 5, 2, 8, 1];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
console.log(largest);

//  Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function divisible(num1, num2){
    if (num1 % num2 === 0) {
        console.log('true');
    } else {
        console.log('false')
    }
}
divisible(20, 5) //true
divisible(25, 2) //false

// Write a function that takes an array of words and a character and return each word that has that letter present.

// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

function letter(arr2, char){
    let arr = []
    for(let i = 0; i < arr2.length; i++){
        if (arr2[i].includes(char)) {
            arr.push(arr2[i])
        }
    }
    return arr
}
console.log(letter(["hello", 'goodbye', 'thanks', 'jello'], 'x'))

