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

var arr = [3, 5, 2, 8, 1];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
console.log(largest);
