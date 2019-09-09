
    // COMMENTED OUT SECTION BECAUSE IN ORDER TO DEBUG THE INVENTORY DISPLAY IN THE STAR WARS BOX.

// let readline = require("readline-sync");



// let enemyTypes = ["Storm Troopers", "Rogue Gungans", "Tusken Raiders"];
// let jeddiAttack = [" Bow Caster", " Force Choke", " Blaster", " Lightsaber "];

// console.log("To your final Jeddi Apprentice test, welcome Jedi Padawan. Yoda am I. On a quest with many weapons to test your courage and the Jedi way, begin you will! To become a Jedi you must!")

// let jeddiApprentice = readline.question("Your name I must have young Padawan: ");

// let jedi = {
//     name: jeddiApprentice,
//     jediPower: randomNumber(100, 150),
//     inventory: jeddiAttack,
//     printInventory: function () {
//         let inven = this.inventory.splice(0,2)
//         let inven2 = this.inventory.splice(3,4)
//         console.log(inven)
// let line1 = justifyCenter("_______INVENTORY & HP_______")
// let line2 = justifyCenter(("Padawan Name: " + this.name))
// let line3 = justifyCenter(("Jedi Power: " + this.jediPower))
// let line4 = justifyCenter(("Inventory: " + inven))
// let line5 = justifyCenter((inven + inven2))
// printBanner(line1, line2, line3, line4, line5)
//     }
// }

// function justifyCenter(str) {
//     let remainder = str.length % 2 === 0 ? " " : ""
//     let space = Math.floor((55 - str.length) / 2)
//     return `${ " ".repeat(space)}${str}${" ".repeat(space)} ${remainder}`
// }

// function printBanner(line1="", line2="", line3="", line4="", line5=""){
//     console.log(`
//     ________   ___   ____
//    / __   __| / _ \\ |  _ \\
// _____> \\ | |   |  _  ||    /______________________________
// / _______/ |_|   |_| |_||_|\\_______________________________ \\
// / /                                                         \\ \\
// | | ${line1} | |
// | | ${line2} | |
// | | ${line3} | |
// | | ${line4} | |
// | | ${line5} | |
// | |                                                          | |
// \\ \\____________________________    _     ___   ____   _______/ /
// \\___________________________  |  |  |  / _ \\ |  _ \\ / _______/
//                          | |/\\ | | | _||    / > \\  
//                          \\_/\\_/ |_| |_||_|\\_\\|__/
// `)
// }


// jedi.printInventory();


// Padawan Name: ${this.name}
let line1 = justifyCenter("_______INVENTORY AND HP_______");
let line2 = justifyCenter("Padawan Name: " + this.name);
let line3 = justifyCenter("Jedi Power: " + this.jediPower);
let line4 = justifyCenter("Inventory: " + this.inventory);
let line5 = justifyCenter("______________________________");



console.clear()
console.log(`
       ________   ___   ____
      / __   __| / _ \\ |  _ \\
 _____> \\ | |   |  _  ||    /_____________________________
/ _______/ |_|   |_| |_||_|\\______________________________ \\
/ /                                                        \\ \\
| |                                                          | |
| |                                                          | |
| |                                                          | |
| |                                                          | |
| |                       <Your text>                        | |
| |                                                          | |
| |                                                          | |
| |                                                          | |
| |                                                          | |
\\ \\____________________________    _   ___   ____   _______/ /
\\___________________________  |  | | / _ \\ |  _ \\ / _______/
                              | |/\\| ||  _  ||    / > \\  
                              \\_/\\_/ |_| |_||_|\\_\\|__/
`)



function justifyLeft(str) {
        let space = 55 - str.length
        return `${str} ${" ".repeat(space)}`
}

function justifyCenter(str) {
        let remainder = str.length % 2 === 0 ? " " : ""
        let space = Math.floor((55 - str.length) / 2)
        return `${ " ".repeat(space)}${str}${" ".repeat(space)} ${remainder}`
}

// let line1 = justifyCenter("Hello")
// let line2 = justifyCenter("Welcome to Star Wars")
// let line3 = justifyCenter("Prepare!!!")
// let line4 = justifyCenter("..")
// let line5 = justifyCenter(".")

console.log(`
             ________   ___   ____
            / __   __| / _ \\ |  _ \\
       _____> \\ | |   |  _  ||    /______________________________
     / _______/ |_|   |_| |_||_|\\_______________________________ \\
    / /                                                         \\ \\
    | | ${line1} | |
    | | ${line2} | |
    | | ${line3} | |
    | | ${line4} | |
    | | ${line5} | |
    | |                                                          | |
     \\ \\____________________________    _     ___   ____   _______/ /
     \\___________________________  |  |  |  / _ \\ |  _ \\ / _______/
                                  | |/\\ | | | _||    / > \\  
                                  \\_/\\_/ |_| |_||_|\\_\\|__/
    `)






