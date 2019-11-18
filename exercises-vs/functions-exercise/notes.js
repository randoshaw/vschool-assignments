// Review with class after the next day

// Write a function that accepts two numbers as parameters, and returns the sum.
function sumTwoNums(num1, num2){
    return num1 + num2
}
console.log(sumTwoNums(3, 5))
// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
const bigint = (num1, num2, num3) => {
    if(num1 > num2 && num1 > num3){
        return num1
    } 
    else if (num2 > num1 && num2 > num3){
        return num2
    } else {
        return num3
    }
}
console.log("big int: ", bigint(4, 5, 6))
// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
function oddOrEven(num){
    
    if(num % 2 === 0){
        return "even"
    } else {
        return "odd"
    }
}
console.log(oddOrEven(7)) // => odd
console.log(oddOrEven(6)) // => even
// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
stringManipulated = (aString) => {
    if (aString.length < 20) {
        return aString + aString;
    } else return aString.slice(0, aString.length/2);
} 
console.log(stringManipulated("sucka"));
console.log(stringManipulated("suckasuckasuckasuckasuckasuckaaa"));

let stringLength = function(str) {
    if (str.length >= 20) {
        return str.slice(0, Math.ceil(str.length / 2))    
    } else {
        return str.concat(str)
    }
 }
 const characters = "abcdefghijklmnopqrstuvwxyz"
 console.log(stringLength(characters))
 console.log(stringLength("Hello"))

 //nested for loops

for (var i = 0; i < 10; i++) {
    var myArray = []
    myArray.push(i)
    console.log(myArray)
    for (var j = 0; j < myArray.length; j++){
        console.log(myArray[j])
    }
}

var multiArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for ( i = 0; i < multiArr.length-1; i++) {
    console.log(multiArr[i])
    for (j = 0; j < multiArr[i].length; j++) {
        console.log(multiArr[j])
    }
}