let readlinesync = require("readline-sync")
const options = ["Insert Word and Definition", "Look Up Word"]
const dictionary = {
}
let isRunning = true
const whatToDo = () => {
    const whatAreOptions = readlinesync.keyInSelect(options, "What do you want to do?")
    if (whatAreOptions === 0) {
        console.log("Option One")
        addWord()
    } else if (whatAreOptions === 1) {
        console.log("Option Two")
        findWord()
    } else {
        console.log("Cancel")
        return isRunning = false
    }
}
const addWord = () => {
    //ask a question, imput as key in our object
    //ask a definition, input as value in our object
    const currentWord = readlinesync.question("Enter New Word: ")
    const currentDefinition = readlinesync.question("Enter New Definition: ")
    currentWord.toLowerCase()
    currentDefinition.toLowerCase()
    dictionary[currentWord] = currentDefinition
    // console.log(`${currentWord}: ${currentDefinition}`)
    console.log(dictionary)
    //check if key:value is already there
}
const findWord = () => {
    //ask a question, compare answer against object
    const searchWord = readlinesync.question("What word do you want to find?")
    if (dictionary[searchWord]) {
        //if the word is there 
        console.log(dictionary[searchWord])
    } else {
        console.log("The word is not in the dictionary.")
    }
}
while (isRunning) {
    whatToDo()
}