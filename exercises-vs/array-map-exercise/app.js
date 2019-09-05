// 1) Make an array of numbers that are doubles of the first array
console.log("#1")

function doubleNumbers(arr){
  return arr.map((e) => e * 2)
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


// 2) Take an array of numbers and make them strings
console.log("#2")

function stringItUp(arr){
    let strArr = arr.map((e) =>
    e.toString())
        return strArr
}
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


// 3) Capitalize each of an array of names
console.log("#2")

function capitalizeNames(arr){
    let toUpper = arr.map((e) => {
        e = e.toLowerCase()
        return e.charAt(0).toUpperCase() + e.slice(1)
    })
    return toUpper
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]


//   4) Make an array of strings of the names
console.log("#4")

function namesOnly(arr){
    const namesArray = arr.map((e) => e.name)
    return namesArray
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
console.log("#5")

function makeStrings(arr){
    return arr.map( e => {
        if (e.age >= 18) {
            return e.name + "is old enough to to see Da Matwix"
        } else {
            return e.name + "is NOT old enough to see Da Matwix"
        }
    })

}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]


// 6) Make an array of the names in h1s, and the ages in h2s
console.log("#6")

function readyToPutInTheDOM(arr){
    return arr.map(e => '<h1>' + e.name + '</h1>' + '<h2>' + e.age + '</h2>') 
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]

