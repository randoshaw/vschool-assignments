
const express = require('express')
// console.log(express) => returns
const app = express()
const uuid = require("uuid/v4")


const todos = [
    {
        name: "Halloween!",
        description: "Spooky Scary",
        imageURL: "https://images.pexels.com/photos/632044/pexels-photo-632044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        completed: false,
        _id: uuid()
    }, 
    {
        name: "Foggy Road",
        description: "Too Foggy",
        imageURL: "https://images.pexels.com/photos/2741576/pexels-photo-2741576.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        completed: false,
        _id: uuid()
    },
    {
        name: "Foggy Trail",
        description: "The Great Outdoors!",
        imageURL: "https://images.pexels.com/photos/2527559/pexels-photo-2527559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        completed: false,
        _id: uuid()
    }
]


// Middleware => checks for JSON in every client request and parses it and puts it in the object
app.use(express.json())


app.get("/",(req, res) => {
    res.send(todos)
})

// makes a new one. when making a new request, needs params & body. - the new input from the user is req.body
app.post("/", (req, res) => {
    const newTodo = req.body
    // console.log(newTodo)
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send(newTodo)
})

// Delete. params is a piece of a request (something built in). findIndex is a method
app.delete("/:_id", (req, res) => {
    const todoId = req.params._id
    const indexToDel = todos.findIndex(todo => todo._id === todoId)
    todos.splice(indexToDel, 1)
    res.send(`Successfully Deleted Item`)
})

// put = edits. ':' is to notify that it is a parameter. 'find' gets the whole object. 'findIndex' finds particular index of the object. 'Object.assign' makes it change only the item(s) targeted in an object, keeps everything else the same. 
//MDN for Object.assign() : Used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
// request.params comes from the url, the key is set with a colon \\ '/:id'
app.put("/:_id", (req, res) => {
    const todoId = req.params._id
    const updateTodos = todos.find(todo => todo._id === todoId)
    const indexToUpdate = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(updateTodos, req.body)
    todos.splice(indexToUpdate, 1, updatedTodo)
    res.send(updatedTodo)
})




app.listen(7391, () => {
    console.log("Server is running on Port 7391")
})

// request.query // comes through the url, key begins with '?', value is after '=', chain queries with '&'

// Requests comes in as strings, and the req.body is in JSON - use Middleware, express.json() to parse it