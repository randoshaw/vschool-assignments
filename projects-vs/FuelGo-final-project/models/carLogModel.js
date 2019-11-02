const mongoose = require("mongoose")
const Schema = mongoose.Schema

const carLogSchema = new Schema({
    car: {
        type: Schema.Types.ObjectId,
        ref: "CarInfo",
        required: true
    },
    odometer: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    notes: {
        type: String
    },
    tankFull: {
        type: Boolean,
        default: false
    },
    gallons: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("CarLog", carLogSchema)