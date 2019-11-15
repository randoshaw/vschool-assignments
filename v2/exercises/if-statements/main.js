// Preliminaries:
// 1.
if (5 > 3){
    console.log("5 is greater than 3")
}

// 2.
if ('cat'.length === 3){
    console.log('3 is the length')
}

if ('cat' === 'dog'){
    console.log('cat is equal to dog')
} else {
    console.log('cat is not equal to dog')
}

//Bronze
// 1.
const person = {
    name: "Bobby",
    age: 12
}

if (person.age >= 18){
    console.log(`${person.name} is allowed to go to the movie`)
} else {
    console.log(`${person.name} is not allowed to go to the movie because they are not at least 18`)
}

// 2.
if (person.name[0] === 'B') {
    console.log(`${person.name} is allowed to to attend the movie because their name starts with a B`)
} else {
    console.log(`${person.name} is not allowed to attend the movie because their name does not start with a B`)
}

// 3.
if (person.age >= 12 && person.name.startsWith('B')) {
    console.log('is allowed to go to the movie because they are at least 18 and their name starts with a B')
} else {
    console.log('is not allowed to go to the movie')
}

//SILVER MEDAL
// 1. Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
if (1 === 1) {
    console.log('strict')
} else if (1 == 1) {
    console.log('loose')
} else {
    console.log('not equal at all')
}

//2. Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4
if (1 <= 2 && 2 === 4) {
    console.log('yes')
}   else{
    console.log('no')
}

//GOLD MEDAL
//1. Write an if statement that checks to see if "dog" is a string
let dog = "dog"
if (typeof dog === "string") {
    console.log("The variable 'dog' is a string")
} else{
    console.log("The variable 'dog' is not a type of string")
}

//2. Write an if statement that checks to see if "true" is a boolean
let bool = true
if (typeof bool === 'boolean') {
    console.log("'true' is a boolean")
}

//3. Write an if statement that checks to see if a variable has been defined or not
let variable 
if (typeof variable !== "undefined" || null) {
    console.log(variable)
} else {
    console.log("variable does not exist")
}

//4. Write an if statement asking if "s" greater than 12?
let letter = "s"
let num = 0
if (letter.length > num) {
    console.log("the letter" + letter + "is greater than" + num)
} else{
    console.log("the letter" + letter +  " is less than" + num)
}

let strawberryCount = 3
if (strawberryCount > 10) {
    console.log("You have enough strawberries.")
} else {
    console.log("You do not have enough strawberries.")
}
