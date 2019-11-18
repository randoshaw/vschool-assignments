//1. Loop through the following array and count how many "computers" there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

let compAmount = 0
for (let i=0; i < officeItems.length; i++) {
    let theWord = officeItems[i]
    if (theWord === 'computer') {
        compAmount++;
    }
}
console.log(compAmount)

//2. Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

const peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max.")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max.")
    }
}


////////////////////////////

//Class Quiz

// Loop through the following array, and log to the console "hooray" for every party there is.

var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]

for (let i = 0; i < eventsAtWork.length; i++) {
   if (eventsAtWork[i] === "party") {
       console.log("hooray")
   }
}


// Loop through the following array, and count how many "trues" there are.

var booleans = [true, true, false, true, false, false, false]

let count = 0

for (let i = 0; i < booleans.length; i++){
    if(booleans[i]){
        count++ 
    }
}

console.log(count)

// Add an isAdmin property to each of the users in this array.

var users = [
    {
      name: "Sophie",
      age: 12
    },
    {
      name: "Larry",
      age: 32
    },
    {
      name: "Cathy",
      age: 40
    }
  ]

  for(let i = 0; i < users.length; i++){
      users[i].isAdmin = false;
      users[1].isAdmin = true
  }

  console.log(users)

  