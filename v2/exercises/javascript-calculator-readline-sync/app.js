const readline = require('readline-sync')

const choices = ['add', 'subtract', 'multiply', 'divide']

const num1 = readline.question("Please enter your first number ")
const num2 = readline.question('Please enter your second number ')
const operationSelect = readline.keyInSelect(choices, 'Please enter the operation to perform')

if (choices[operationSelect] === 'add') {
    result = add(num1, num2)
} else if (choices[operationSelect] === 'subtract') {
    result = sub(num1, num2)
} else if (choices[operationSelect] === 'multiply') {
    result = mult(num1, num2)
} else if (choices[operationSelect] === 'divide') {
    result = div(num1, num2)
} else {
    result = 'canceled'
}

console.log('The result is ' + result)

function add(num1, num2) {
    return Number(num1) + Number(num2)
}

function sub(num1, num2) {
    return Number(num1) - Number(num2)
}

function mult(num1, num2) {
    return Number(num1) * Number(num2)
}

function div(num1, num2) {
    return Number(num1) / Number(num2)
}