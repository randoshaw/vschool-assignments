const readline = require("readline-sync");


const enemyTypes = ["Storm Troopers", "Rogue Gungans", "Tusken Raiders"];
const jeddiAttack = ["Force Choke", " Bow Caster",  " Blaster", " Lightsaber "];

console.log(` 
                    ____
                 _.' :   ._
             .-.' .  ;   .' .-.
    __      / : ___\ ;  /___ ; \      __
  ,'_ ""--.:__;".-.";: :".-.":__;.--"" _ ,
  :'  .t""--.. '<@. ;_  ',@>  ..--""j.'  ;
        :-.._J '-.-'L__  -- ' L_..-;'
         "-.__ ;  .-"  "-.  : __.-"
             L ' /.------.\ ' J
              "-.   "--"   .-"
             __.l"-:_JL_;-";.__
          .-j/'.;  ;""""  / .'\"-.
        .' /: . "-.:     .-" .';   .
     .-"  / ;  "-. "-..-" .-"  :    "-.
  .+"-.  : :      "-.__.-"      ;-._   \`
  ; \   .; ;                    : : "+. ;
  :  ;   ; ;                    : ;  : \:
 :  ."-; ;  ;                  :  ;   ,/; 
                 `)

console.log("To your final Jeddi Apprentice test, welcome Jedi Padawan. Yoda am I. On a quest with many weapons to test your courage and the Jedi way, begin you will! To become a Jedi you must!")

const jeddiApprentice = readline.question("Your name must I have young Padawan: ");

const jedi = {
    name: jeddiApprentice,
    health: randomNumber(100, 150),
    inventory: jeddiAttack,
    printInventory: function () {
        console.log("_______INVENTORY AND HP_____");
        console.log("Padawan Name: " + this.name);
        console.log("Jedi Health: " + this.health);
        console.log("Inventory: " + this.inventory);
        console.log("____________________________");
    }
}
jedi.printInventory();

let gameOver = false;

while (jedi.health > 0 && !gameOver) {
    start()
}

console.log("Ended is the Quest. Ended your Jedi training you have.");

function start() {
    let choice = readline.keyIn("*To continue walking, press [w]. To view inventory press [v]. To end Game [e] * ", {limit: 'vwe'});
    if (choice === 'v') {
        return jedi.printInventory();
    }else if (choice === 'w') {
        console.log("* Walk forward. The amount of yards traveled are displayed in yellow below: *");
        let rando = randomNumber(0, 30);
        console.log(rando);
        if (rando <= 10) {
            return enemyAttack(new Enemy());
        } else {
            return;
        }
    }else if(choice === 'e') {
        gameOver = true;
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function Enemy() {
    this.type = getTypes(enemyTypes);
    this.health = getHitPoints(this.type);
    // this.defense = this.health * 3;
}

function getTypes(enemyTypes) {
    return enemyTypes[randomNumber(0, (enemyTypes.length - 1))];
}

function getHitPoints(type) {
    if (type === "Storm Troopers") {
        return randomNumber(80, 100);
    } else if (type === "Rogue Gungans") {
        return randomNumber(50, 79);
    } else if (type === "Tusken Raiders") {
        return randomNumber(20, 49);
    }
}

function enemyAttack(enemy) {
    let jediDecision = readline.question(`The ${enemy.type} come across you have. ${enemy.health} hit points they have. 
* To attack press [a]. To run away press [r] * `)

    if (jediDecision === 'a') {
        console.log("Attack the enemies you will.");
        return attack(enemy);
    } else if (jediDecision === 'r') {
        console.log("Conserve the Force to continue the quest you choose. Away you run!");
        return run(enemy);
    }
}

function attack(enemy) {
    console.log(`MMMmmMMM.. The ${enemy.type} among you they are.`)
    while (enemy.health > 0 && jedi.health > 0) {
        let willAttack = readline.keyIn("* To attack with one of your items, press [i] *")
        if (willAttack === 'i') {
            let damage = getAttacks();
            enemy.health -= damage;
            console.log(damage, `Remaining ${enemy.health} HP they have.`)
        }
        if (enemy.health <= 0) {
            break;
        }
        enemyAttacks(enemy);
    }
    if (jedi.health > 0) {
        return beatEnemy();
    }
}

function getAttacks() {
    // let attack = jeddiAttack[Math.floor(Math.random(jeddiAttack.length))];
    let attack = jeddiAttack[randomNumber(0, 3)];
    console.log(`Attack with ${attack} you decide.`);
    if (attack === jeddiAttack[0]) {
        return randomNumber(11, 30);
    } else if (attack === jeddiAttack[1]) {
        return randomNumber(1, 10);
    } else if (attack === jeddiAttack[2]) {
        return randomNumber(31, 50);
    } else if (attack === jeddiAttack[3]) {
        return randomNumber(51, 70);
    }
}

function run(enemy) {
    let willRun = randomNumber(1, 2)
    if (willRun === 1) {
        console.log("Escape from the enemy you failed.")
        enemyAttacks(enemy);
        return attack(enemy);
    } else {
        console.log("Successful is your escape. With you the Force is Strong!")
        return start();
    }
}

function beatEnemy() {
    let jediHpLevel = randomNumber(25, 50);
    jedi.health += jediHpLevel;
    let inventoryItems = ["Enemy Blaster", "Ion Blaster", "Cycler Rifle", "Gaffii Stick", "Electrostaff"];
    jedi.inventory.push(inventoryItems[randomNumber(0, 4)]);
    console.log(`Obtained a ${jedi.inventory[jedi.inventory.length - 1]} you have. HP ${jediHpLevel} You gained. Many more enemies there are if you continue on the journey. Complete is your quest Master Jedi ${jeddiApprentice}! Many enemies await if wish to continue you choose and more skilled become you will.  YEEeeEEss`);
}

function enemyAttacks(enemy) {
    readline.keyIn(`${enemy.type} attacks. Use the Force you must!`);
    let enemyHit = randomNumber(10, 30);
    jedi.health -= enemyHit;
    console.log(`Damage from the ${enemyHit} you took. Remaining ${jedi.health} you have!`);
}