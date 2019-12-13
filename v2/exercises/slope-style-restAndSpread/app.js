// https://coursework.vschool.io/es6-practice-object-literals-destructuring-rest-and-spread-operators/

// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it

const collectAnimals = (...animals) => animals
["dog", "cat", "mouse", "jackolope", "platypus"]
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")) 


// Write a function that returns a food object with the array names as properties using Object Literals:

const combineFruit = (fruit, sweets, vegetables) => ({fruit, sweets, vegetables})

console.log(combineFruit(['apple', 'pear'],
['cake', 'pie'],
['carrot']))

// Use destructuring to use the property names as variables:

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  }
  
  const {location, duration} = vacation
  function parseSentence(location, duration){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  console.log(parseSentence(location, duration))

// Use destructuring to make this code ES6:

const returnFirst = (...items) => items[0]
console.log(returnFirst('spoon', 'bowl', 'fork', 'knife', 'plate'))

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav, fourthFav, fifthFave] = arr
    return `My top three favorite activites are, ${firstFav}, ${secondFav}, and ${fifthFave}.`
}
console.log(returnFavorites(favoriteActivities))

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

const combineAnimals = (...allAnimals) => allAnimals

const petAnimals = ['Dog', 'Cat', 'Mouse']
const wildAnimal = ['Jackolope']
const weirdAnimal = ['Platypus']

console.log(combineAnimals(...petAnimals, ...wildAnimal, ...weirdAnimal))

// Make the following function more ES6xy. Use at least both the rest and spread operators:

const product = (...numbers) => {
    return numbers.reduce((acc, number) => {
        return acc * number
    }, 1)
}

// Make the following function more ES6xy. Use at least both the rest and spread operators:

const unshift = (array, ...letters) => [...letters, ...array]
const arr = [1, 2, 3, 4, 5]
console.log(unshift(arr, 'a', 'b', 'c', 'd', 'e'))

// Write some destructuring code to help this function out. Use Object literals to simplify it: 

const namesList = ['Frank Peterson', 'Suzy Degual', 'Liza Jones']
const populatePeople = names => {
    return names.map(name => {
        name = name.split(' ')
        // console.log(name)
        const [firstName, lastName] = name
        return {firstName, lastName}
    })
}
console.log(populatePeople(namesList))

// /////////////////////
// //Rest Operator

// let sum = function(...args) {
//     // console.log(args)
//     return args.reduce((prev, curr) => prev + curr)
//     // return Array.prototype.reduce.call(arguments,(prev, curr) => {
//     //     return prev + curr;
//     // })
// }

// console.log( sum(2,3,4,5) )

// //

// let multiply = (mul, ...numbers) => {
//     // console.log(mul, numbers)
//     return numbers.map((n) => {
//         return mul * n
//     })
// }

// let result = multiply(2,7,4,5)
// console.log(result)


// //Spread Operator

// // let max = Math.max(4,6,3,8)
// // console.log(max)

// let numbers = [4,6,8,3]
// // let max = Max.max.apply(null, numbers)
// let max = Math.max(...numbers)

// console.log(max)