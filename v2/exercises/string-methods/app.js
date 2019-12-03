// Make a function that will return any given string into all caps followed by the same string all lowercase.

// capilizeAndLowercase("Hello") // => "HELLOhello"

function capitalizeAndLowercase(word) {
    return word.toUpperCase() + word.toLowerCase()
}

console.log(capitalizeAndLowercase('whoa'))

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5

function halfWord(word){
    return Math.floor(word.length / 2)
}

console.log(halfWord("number half the length and rounded down"))

// Make a function that uses slice() and the other functions you've written to return the first half of the string

// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"

function firstHalf(word) {
    return word.slice(0, halfWord(word))
}

console.log(firstHalf('cutted'))

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.

// hint: If the half way point is a decimal, or rather, your string length is odd. Use Math.floor to round down.

// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"

function halfCap(word) {
    return (word.slice(0, halfWord(word))).toUpperCase() + (word.slice(halfWord(word))).toLowerCase()
}

console.log(halfCap("half of these words will be capitalized"))

// Optional Code Challenge (This one is a step up in difficulty and utilizes the .split() string method and .join() array method):

// Make a function that takes any string and capitalizes any character that follows a space.

// capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"

function challenge(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {

        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
 
 console.log(challenge("This was a bit challenging!"));

