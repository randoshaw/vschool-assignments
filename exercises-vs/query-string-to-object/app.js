// Write a function that takes a url with a query string and returns an object of the key:

// 1. Define/understand the problem
    // takes a string and returns an object
    // Isolate important data from given input
// 2. Make a plan - pseudocode
    // Get the section of the string after the "?"
    // Isolate the key value pairs
    // Isolate the individual key/value pairs 1 by 1
    // add that key value pair to the object we are returning
// 3. Implement the paln -> do code
// 4. Look back - what other ways could this be solved?

//////////

// // 1st approach
// function parseQuery(str){
//     const occupation = str.split("=")[2]
//     const almostName = str.split("=")[1]
//     const finalName = almostName.split("&")[0]
//     return {name: finalName,
//             occupation: occupation}
// }

// console.log(parseQuery("www.website.com/api?name=rick&occupation=scientist"))
//     // returns
//     // {
//     //     name: "rick",
//     //     occupation: "scientist"
//     // }

//////////

// With class
function parseQuery(str){
    const result = {}
    // Get the section of the string after the "?"
    const queryString = str.split("?")[1]
    // Isolate the key value pairs
    const queryArr = queryString.split("&")
    for(let i = 0; i < queryArr.length; i++){
    // Isolate the individual key/value pairs 1 by 1
    const keyValueArr = queryArr[i].split("=")
    // add that key value pair to the object we are returning
    result[keyValueArr[0]] = keyValueArr[1]
    // result.name = "rick"
    // result.occupation = "scientist"
    }
    return result
}

console.log(parseQuery("www.website.com/api?name=rick&occupation=scientist&color=blue&age=40"))
