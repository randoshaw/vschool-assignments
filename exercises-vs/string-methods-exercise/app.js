// Make a function that will return any given string into all caps followed by the same string all lowercase.

// capilizeAndLowercase("Hello") // => "HELLOhello"

function capilizeAndLowercase(foo) {
    return foo.toUpperCase() + foo.toLowerCase();
}

console.log(capilizeAndLowercase("abracadabra"))

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5

function halfword(foo) {
    return Math.floor(foo.length / 2);
}

console.log(halfword('how many characters?'))

// Make a function that uses slice() and the other functions you've written to return the first half of the string

// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"

function firstHalf(foo) {
    return foo.slice(0, halfword(foo));
}

console.log(firstHalf("I will be split in half!"))

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)

// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"

// function halfUppercase(foo) {
//     return (foo.slice())
// }

function halfCaps(input){
    return (input.slice(0,halfword(input))).toUpperCase() +
    (input.slice(halfword(input))).toLowerCase();
}

console.log(halfCaps("some are big, some are small"));

// Optional Code Challenge (This one is a step up in difficulty):

// Make a function that takes any string and capitalizes any character that follows a space.

// capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"

function titleCase(str) {
    let arr = str.toLowerCase().split(" ");
    let result = arr.map(
        function(val) {
            return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
        }
    )
    return result.join(" ");
}

console.log(titleCase('tIdY mE uP pLeAsE!'))
