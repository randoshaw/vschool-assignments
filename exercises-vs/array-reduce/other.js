// REDUCE
//#3 Turn an array of voter objects into a count of how many people voted
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function totalVotes(arr) {
    arr.reduce(function(final, voter) {
        if(voter.voted === true){
            final++
        }
        return final
    }, 0)

    return voteCount
}

console.log(totalVotes(voters))



//SORT
    // Return: a sorted array

const arr = [4, 7, 43, 1, 343, 6, 65, 2]

arr.sort(function(a, b){
    return a > b 
})

console.log(arr)

//NESTED LOOPS

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const newARR = []

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){

    }
}

for(let i = 0; i < 10; i++){
    newARR.push([])
    for(let j = 0; j < 10; j++){
        newArr[i].push(0)
    }
}

console.log(newArr)