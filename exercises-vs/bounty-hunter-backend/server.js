const express = require('express')
const app = express()
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

// Middleware for every request
app.use(express.json())  
    //  Turns the request body JSON object into a JS object
    // Makes it available in the request.body ( req.body )

app.get("/bounty",(req, res) => {
    res.send(bounty)
})

app.post("/bounty", (req, res) => {
    const newBounty = req.body
    // console.log(newTodo)
    newTodo._id = uuid()
    todos.push(newBounty)
    res.send(newBounty)
})

app.delete("/bounty/:_id", (req, res) => {
    const bountyId = req.params._id
    const indexToDel = bounty.findIndex(bounty => bounty._id === bountyId)
    bounty.splice(indexToDel, 1)
    res.send(`Successfully Deleted Bounty`)
})

app.put("/bounty/:_id", (req, res) => {
    const bountyId = req.params._id
    const bountyUpdate = bounty.find(bounty => bounty._id === bountyId)
    const indexToUpdate = bounty.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bountyUpdate, req.body)
    bounty.splice(indexToUpdate, 1, updatedBounty)
    res.send(updatedBounty)
})



app.listen(7000, () => {
    console.log("Server is running on Port 7000")
})