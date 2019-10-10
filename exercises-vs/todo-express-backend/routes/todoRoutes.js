const express = require('express')
const todoRouter = express.Router()
const uuid = require("uuid/v4")

// Routes seperate information to more manageable chunks.

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

todoRouter.route("/")
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        // console.log(newTodo)
        newTodo._id = uuid()
        todos.push(newTodo)
        res.send(newTodo)
    })
todoRouter.route("/:_id")
    .get((req, res) => {
        const todoId = req.params._id
        const individualTodo = todos.find(todo => todo._id ===todoId)
        res.send(individualTodo)
    })
    .delete((req, res) => {
        const todoId = req.params._id
        const indexToDel = todos.findIndex(todo => todo._id === todoId)
        todos.splice(indexToDel, 1)
        res.send(`Successfully Deleted Item`)
    })
    .put((req, res) => {
        const todoId = req.params._id
        const updateTodos = todos.find(todo => todo._id === todoId)
        const indexToUpdate = todos.findIndex(todo => todo._id === todoId)
        const updatedTodo = Object.assign(updateTodos, req.body)
        todos.splice(indexToUpdate, 1, updatedTodo)
        res.send(updatedTodo)
    })

// todoRouter.get("/",(req, res) => {
//     res.send(todos)
// })

// todoRouter.get("/:_id", (req, res) => {
//     const todoId = req.params._id
//     const individualTodo = todos.find(todo => todo._id ===todoId)
//     res.send(individualTodo)
// })

// todoRouter.post("/", (req, res) => {
//     const newTodo = req.body
//     // console.log(newTodo)
//     newTodo._id = uuid()
//     todos.push(newTodo)
//     res.send(newTodo)
// })

// todoRouter.delete("/:_id", (req, res) => {
//     const todoId = req.params._id
//     const indexToDel = todos.findIndex(todo => todo._id === todoId)
//     todos.splice(indexToDel, 1)
//     res.send(`Successfully Deleted Item`)
// })

// todoRouter.put("/:_id", (req, res) => {
//     const todoId = req.params._id
//     const updateTodos = todos.find(todo => todo._id === todoId)
//     const indexToUpdate = todos.findIndex(todo => todo._id === todoId)
//     const updatedTodo = Object.assign(updateTodos, req.body)
//     todos.splice(indexToUpdate, 1, updatedTodo)
//     res.send(updatedTodo)
// })

// Makes it available to be used elsewhere
module.exports = todoRouter
