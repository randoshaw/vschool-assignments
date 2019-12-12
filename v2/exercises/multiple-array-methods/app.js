// https://coursework.vschool.io/multiple-array-methods-practice-1/


// Using the provided peopleArray (bottom of this article), write a function that:

// Returns a list of everyone older than 18, which is
// sorted alphabetically by last name, and where
// each name and age is embedded in a string that looks like an HTML <li> element.

const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const sorted = peopleArray => peopleArray.filter(person => person.age >= 18).sort((a, b) => a.lastName > b.lastName ? 1 : a.lastName === b.lastName ? 0 : -1).map(each => `<li>${each.firstName} ${each.lastName} is ${each.age}<li`)

console.log(sorted(peopleArray))
