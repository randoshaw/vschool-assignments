const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bountySchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: String,
    type: {
        type: String,
        enum: ["Jedi", "Sith"]
    },
    isAlive: {
        type: Boolean,
        required: true
    },
    bounty: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Bounty", bountySchema)