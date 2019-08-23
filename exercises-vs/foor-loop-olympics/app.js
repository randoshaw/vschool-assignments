//Preliminaries

// Write a for loop that prints to the console the numbers 0 through 9.
for(let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("\n");

// Write a for loop that prints to the console 9 through 0.
for(let i = 9; i > -1; i--) {
    console.log(i)
}

console.log("\n");

// Write a for loop that prints these fruits to the console.
let fruit = ["banana", "orange", "apple", "kiwi"]

for(let i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

console.log("\n");


// Bronze Medal
// Write a for loop that will push the numbers 0 through 9 to an array.
// let i = 0;

// for (i; i < 10; i++) {
//     console.log(i);
// }

// console.log("\n");

let array0to9 = []

for (i = 0; i < 10; i++){
    array0to9.push(i);
}
console.log(array0to9);

console.log("\n")

// Write a for loop that prints to the console only even numbers 0 through 100.
// for (i = 0; i <= 100; i ++){
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// console.log("\n");
// Write a for loop that will push every other fruit to an array.
var fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for(i = 0; i < fruits.length; i++){
    if (i % 2 === 0){
        console.log(fruits[i])
    }
}

console.log("\n")

//Silver Medal
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

// Write a loop that will print out all the names of the people of the people array
for (i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name);
};

// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
let namesArr = [];
let occupationsArr = [];

for(i = 0; i < peopleArray.length; i++){
    namesArr.push(peopleArray[i].name);
    occupationsArr.push(peopleArray[i].occupation);
}

console.log(namesArr);
console.log(occupationsArr);

// Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".
let everyOtherNameArr = [];
let everyOtherOccupationArr = [];

for(i = 0; i < namesArr.length; i++){
    if(i % 2 != 1){
        everyOtherNameArr.push(namesArr[i]);
    }
}

console.log(everyOtherNameArr);

for(i = 0; i < occupationsArr.length; i++){
    if(i % 2 != 0){
        everyOtherOccupationArr.push(occupationsArr[i])
    }
}

console.log(everyOtherOccupationArr)


// Gold Medal

// Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]

let threeArrofZero = [];

for(i = 0; i < 3; i++){
    threeArrofZero.push([0,0,0]);
}

console.log(threeArrofZero)

// Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0], 
// [1, 1, 1], 
// [2, 2, 2]]

let incrementSetArr = [];

for(i = 0; i < 3; i++){
    incrementSetArr.push([i,i,i])
}

console.log(incrementSetArr)

// Create an array that mimics a grid like the following using for loops:

// [[0, 1, 2], 
// [0, 1, 2], 
// [0, 1, 2]]

let incrementThreeArrs = [];

for(i = 0; i < 3; i++){
    incrementThreeArrs.push([0,1,2])
}

console.log(incrementThreeArrs)

// Given a grid like the previous ones, write a for loop that would change every number to an x.
// var grid = [["x", ...], 
//             ["x", ...], 
//             ["x",...], ...] 

let numbersToBeReplacedArray = []
let replaceArrayNumbersWithX = []

for(i = 0; i < 3; i++){
    numbersToBeReplacedArray.push([0,0,0]);
    numbersToBeReplacedArray[i].push('x');

}
console.log(numbersToBeReplacedArray);
console.log(replaceArrayNumbersWithX);