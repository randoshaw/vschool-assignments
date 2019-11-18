// Write a function that accepts two numbers as parameters, and returns the sum.

function sum(param1, param2) {
    return param1 + param2;
}

console.log(sum(5, 4));

console.log("\n");

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function greatestNum(param1, param2, param3) {
    let greatest = Math.max(param1, param2, param3);
    return greatest;
}

console.log(greatestNum(35, 46, 73));

console.log("\n");

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(evenOrOdd(54));
console.log(evenOrOdd(45));

console.log("\n");

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

function stringCharof20(foo) {
    if (foo.length < 21) {
        return foo + foo;
    } else {
        return foo.substring(0, foo.length / 2);
    }
}

console.log(stringCharof20("will this be split in half?"));
console.log(stringCharof20("yes, but this won't!"));

//Another:

function funcFour(string) {
    string.length <= 20
        ? (string = string + string)
        : (string = string.slice(0, string.length / 2));
    console.log(string);
}

funcFour("an uncut string!");
funcFour("this string will be cut!");

//  Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string. ( White spaces count as a letter )

function getMax(str) {
    var max = 0;
    var maxChar = "";
    var array = str.split("");
    // console.log(array)
    for (i = 0; i < array.length; i++) {
        var char = array[i];
        if (str.split(char).length > max) {
            max = str.split(char).length;
            maxChar = char;
        }
    }
    // console.log(maxChar)
}
getMax("what letter occurs the most?");

function letterCount(str) {
    let count = 0;
    let results = [];
    let newArr = str.split("");
    let sorted = newArr.sort();
    for (let i = 0; i < newArr.length - 1; i++) {
        if (sorted[i + 1] === sorted[i]) results.push(sorted[i]);
    }
    console.log(results);
}
letterCount("a;sdkfd");

function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};