console.log("~~~~~~~~~~1~~~~~~~~~~")
// 1a.
// function setup
const sum = (x, y) =>  {
    if(typeof x !== "number"){
        throw new Error("x is not a number")
    } else if(typeof y !== "number"){
        throw new Error("y is not a number")
    }
    console.log(x + y)
}

// 1b.
// try #1
console.log("~~~try #1~~~")
try{
    sum("1", "2")
} catch(err){
    console.log(err)
}
// try #2
console.log("~~~try #2~~~")
try{
    sum(1, 2)
} catch(err){
    console.log(err)
}

console.log("~~~~~~~~~~2~~~~~~~~~~")
// 2a.
// function setup
var user = {username: "Rando", password: "123abc"}
const login = (username, password) => {
    if(username !== user.username){
        throw new Error("username is incorrect")
    } else if(password !== user.password){
        throw new Error("password is incorrect")
    }
    console.log("login successful")
}

// 2b.
// try #1
console.log("~~~try #1~~~")
try{
    login("Rando", "123abc")
} catch(err){
    console.log(err)
}
// try #2
console.log("~~~try #2~~~")
try{
    login("Rando", "123abc")
} catch(err){
    console.log(err)
}
// try #3
console.log("~~~try #3~~~")
try{
    login("Rando", "124abc")
} catch(err){
    console.log(err)
}