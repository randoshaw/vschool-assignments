// let ask = require('readline-sync');
// let hasWon = false;
// let isDead = false;
// let hasKey = false;

// while(!hasWon && !isDead){
    

//     let choice = ['Put hand in hole', 'Find the key', 'Open the door'];
//     let index = ask.keyInSelect(choice, 'What do you want to do?');
    
//     function key(){
//         hasKey = true;
//     };

//     if (index === 0 ){
//         console.log('You put your hand in the hole of gloom.  You dieded. \n Game over.\n');
//         isDead = true;
//     } else if (index === 1){
//         key();
//         console.log('You have obtained the key!  It has been added to your inventory \n');
//     } else {
//         if (hasKey){
//             console.log('You have the key and used it to open the door! Now flee you fool!\n\n');
//             hasWon = true;
//         } else {
//             console.log('Nah ah ah! Nice try, but you\'re not opening this door without a key bucko!\n');
//         }
//     }
// };