// const readline = require("readline-sync")

const { question } = require('readline-sync')


let numberOne = Number(question("can you give me a number?"))

let numberTwo = Number(question("can you give me another number?"))

let operation = question("can you choose one of these operations + - * / ?")

if (operation==="+"){
  console.log (numberOne+numberTwo)
}

if (operation==="-"){
  console.log (numberOne-numberTwo)
}

if (operation==="*"){
  console.log (numberOne*numberTwo)
}

if (operation==="/"){
  console.log (numberOne/numberTwo)
}
