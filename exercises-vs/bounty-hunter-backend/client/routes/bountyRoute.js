const express = require('express')
const bountyRouter = express.Router()
const uuid = require("uuid/v4")

const bounty = [
    {
        fName: "Chungo",
        lName: "Mchunga",
        isAlive: true,
        bounty: 5500,
        type: "Jedi",
        _id: uuid()
    }, {
        fName: "Tangola",
        lName: "Bilboa",
        isAlive: true,
        bounty: 4000,
        type: "Jedi",
        _id: uuid()
    }, {
        fName: "Tugoo",
        lName: "Mon",
        isAlive: true,
        bounty: 4500,
        type: "Sith",
        _id: uuid()
    }
]

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounty)
    })
    .post((req, res) => {
        const newBounty = req.body
        // console.log(newTodo)
        newTodo._id = uuid()
        todos.push(newBounty)
        res.send(newBounty)
    })
    
bountyRouter.route("/:_id")
    .delete((req, res) => {
        const bountyId = req.params._id
        const indexToDel = bounty.findIndex(bounty => bounty._id === bountyId)
        bounty.splice(indexToDel, 1)
        res.send(`Successfully Deleted Bounty`)
    })
    .put((req, res) => {
        const bountyId = req.params._id
        const bountyUpdate = bounty.find(bounty => bounty._id === bountyId)
        const indexToUpdate = bounty.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bountyUpdate, req.body)
        bounty.splice(indexToUpdate, 1, updatedBounty)
        res.send(updatedBounty)
    })
