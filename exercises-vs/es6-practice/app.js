console.log("let & const")
// #1
// Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John", but instead "spot" is returned). You only need to delete var and insert let and const

// John is the pet owner, and his name should be stored differently than the other names.

// var name = "John"
// var age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         var pet = { type: pets[i] }
//         name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

let name = "John"
let age = 101
const pets = ["cat", "dog"]
const petObjects = []

function runForLoop() {
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        pet.name = name
        petObjects.push(pet)
    }
    return name
}

console.log(runForLoop())
////////////////////////////////


// ES6 Arrow Functions
console.log("Arrow Functions")
// Task 1
// Re-write this .map() using an arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const carrots = ['bright orange', 'ripe', 'rotten']

function mapVegetables(arr) {
    return arr.map(carrot => {
        return {type: 'carrot', name: carrot}
    })
}
console.log(carrots)

// Task 2
// Re-write this .filter() using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly)
}
console.log(people)

// Task 3
// Re-write the following functions to be arrow functions:

// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = function(a, b) {
//     return a * b
// }

const doMathSum = (a, b) => a + b

const produceProduct = (a, b) => a * b


// Task 4
// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

// Hi Kat Stark, how does it feel to be 40?
// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100

function printString(firstName = 'Jane', lasName = 'Doe', age = '100') {
    return `Hi $(firstName) ${lastname}, how does it feel to be ${age}?`
}

// Extra Credit
// Use template literals to build the string

// Task 5
// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
    return arr.filter(animal => animal.type === 'dog')
 }

 console.log(filterForDogs(animals))

//  Template Literals
// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

// Hi Janice!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

function message(location = 'Hawii', name = 'Janice') {
    return `Hi ${name}!
    
welcome to ${location}.
    
I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
}

console.log(message())