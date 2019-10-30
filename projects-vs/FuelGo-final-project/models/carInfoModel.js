const mongoose = require("mongoose")
const Schema = mongoose.Schema

const carInfoModel = new Schema({
    make: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String
    },
    model: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    year: {
        type: String
    },
    fuelCapacity: {
        type: Number
    },
    mpg: {
        type: Number
    }
})

module.exports = mongoose.model("CarInfo", carInfoModel)