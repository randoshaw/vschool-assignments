const express = require('express')
// Singular instance to use express
const app = express()
// const uuid = require("uuid/v4")
const morgan = require('morgan')
const mongoose = require("mongoose")


// Middleware for every request
    //  Turns the request body JSON object into a JS object
    // Makes it available in the request.body (req.body)
app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/bountydb",
{
    "useNewUrlParser": true,
    "useFindAndModify": true,
    "useCreateIndex": false,
    "useUnifiedTopology": true
}, () => console.log("Connected to the Database"))
// Middlware uses route on everything that has '/bounty' in the url. 
app.use("/bounty", require("./routes/bountyRoute"))


// Tells the server to listen to port 7000
app.listen(7000, () => {
    console.log("Server is running on Port 7000")
})


// const bounty = [
//     {
//         fName: "Chungo",
//         lName: "Mchunga",
//         isAlive: true,
//         bounty: 5500,
//         type: "Jedi",
//         _id: uuid()
//     }, {
//         fName: "Tangola",
//         lName: "Bilboa",
//         isAlive: true,
//         bounty: 4000,
//         type: "Jedi",
//         _id: uuid()
//     }, {
//         fName: "Tugoo",
//         lName: "Mon",
//         isAlive: true,
//         bounty: 4500,
//         type: "Sith",
//         _id: uuid()
//     }
// ]


// MOVED OVER TO bountyRoute.js
// app.get("/bounty",(req, res) => {
//     res.send(bounty)
// })

// app.post("/bounty", (req, res) => {
//     const newBounty = req.body
//     // console.log(newTodo)
//     newTodo._id = uuid()
//     todos.push(newBounty)
//     res.send(newBounty)
// })

// app.delete("/bounty/:_id", (req, res) => {
//     const bountyId = req.params._id
//     const indexToDel = bounty.findIndex(bounty => bounty._id === bountyId)
//     bounty.splice(indexToDel, 1)
//     res.send(`Successfully Deleted Bounty`)
// })

// app.put("/bounty/:_id", (req, res) => {
//     const bountyId = req.params._id
//     const bountyUpdate = bounty.find(bounty => bounty._id === bountyId)
//     const indexToUpdate = bounty.findIndex(bounty => bounty._id === bountyId)
//     const updatedBounty = Object.assign(bountyUpdate, req.body)
//     bounty.splice(indexToUpdate, 1, updatedBounty)
//     res.send(updatedBounty)
// })