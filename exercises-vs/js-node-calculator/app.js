const readline = require("readline-sync")

const num1 = readline.question("Please enter your first number: \n");
const num2 = readline.question("Please enter your second number: \n");

console.log(`The numbers selected are ${num1} and ${num2} \n \n`);

const opperators = ['Add', 'Subtract', 'Multiply', 'Divide']
const method1 = readline.keyInSelect(opperators, "Which operation do you want to perform?");


function add(){
    let addResult = Number(num1) + Number(num2);
    console.log(`Your answer is:  ${addResult}`);
};

function subtract(){
    let subtractResult = num1 - num2;
    console.log(`Your answer is:  ${subtractResult}`);
};

function multiply(){
    let multiplyResult = num1 * num2;
    console.log(`Your answer is:  ${multiplyResult}`);
};

function divide(){
    let divideResult = num1 / num2;
    console.log(`Your answer is:  ${divideResult}`);
};



if (method1 === 0){
    add();
} else if (method1 === 1){
    subtract()
} else if (method1 === 2){
    multiply()
} else if (method1 === 3){
    divide()
} else {
    console.log('You entered an invalid opperator.  Please Start Over.')
}