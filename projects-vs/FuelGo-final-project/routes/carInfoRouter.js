const express = require("express")
const carInfoRouter = express.Router()
const CarInfo = require("../models/carInfoModel")

// Get All
carInfoRouter.get("/", (req, res, next) => {
    CarInfo.find((err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

// Get by user
carInfoRouter.get("/user", (req, res, next) => {
    CarInfo.find({user: req.user._id}, (err, usersInfo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(usersInfo)
    })
})


// Post
carInfoRouter.post("/", (req, res, next) => {
    // Add the user _id to the request body object
    req.body.user = req.user._id
    // Create the new post object
    const newInfo = new CarInfo(req.body)
    // Save the new post object
    newInfo.save((err, savedInfo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInfo)
    })
})

// findOneAndUpdate(query, updated, options, callback(err, info))
carInfoRouter.put("/:infoId", (req, res, next) => {
    CarInfo.findOneAndUpdate(
        {
            _id: req.params.infoId,
            user: req.user._id
        },
        req.body,
        { new: true },
        (err, info) => {
            if (err) {
                console.log("Error")
                res.status(500)
                return next(err)
            }
            return res.send(info)
        }
    )
})

carInfoRouter.delete("/:infoId", (req, res, next) => {
    CarInfo.findOneAndRemove(
        {
            _id: req.params.infoId, 
            user: req.user._id
        }, (err, info) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        if (info === null){
            return res.send("nothing deleted")
        }
        return res.send({info, successMsg: "Deleted"});
    })
})


module.exports = carInfoRouter