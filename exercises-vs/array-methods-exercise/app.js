var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array.
vegetables.pop()
console.log(vegetables)

// 2. Remove the first item from the fruit array.
fruit.shift()
console.log(fruit)

// 3. Find the index of "orange."
console.log(fruit.indexOf("orange"))

// 4. Add that number to the end of the fruit array.
fruit.push(fruit.indexOf("orange"))
console.log(fruit)

// 5. Use the length property to find the length of the vegetable array.
console.log(vegetables.length)

// 6. Add that number to the end of the vegetable array.
vegetables.push(vegetables.length)
console.log(vegetables)

// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
let fruitsAndVegies = fruit.concat(vegetables)
console.log(fruitsAndVegies) 

// 8. Remove 2 elements from your new array starting at index 4 with one method.
fruitsAndVegies.splice(4, 2)
console.log(fruitsAndVegies)

// 9. Reverse your array.
// fruitsAndVegies.reverse()
// console.log(fruitsAndVegies)

console.log(fruitsAndVegies.reverse())

// 10. Turn the array into a string and return it.
let toStr = fruitsAndVegies.toString()
console.log(toStr)

// console.log(fruitsAndVegies.join())