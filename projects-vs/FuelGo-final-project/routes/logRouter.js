const express = require("express");
const logRouter = express.Router();
const CarLog = require("../models/carLogModel");

// Get All
logRouter.get("/:carId", (req, res, next) => {
    CarLog.find(
        {
            car: req.params.carId,
            user: req.user
        },
        (err, posts) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(200).send(posts);
        }
    );
});

// Get by user
logRouter.get("/user", (req, res, next) => {
    CarLog.find({ user: req.user._id }, (err, usersLog) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(usersLog);
    });
});

// Post
logRouter.post("/", (req, res, next) => {
    // Add the user _id to the request body object
    req.body.user = req.user._id;
    // Create the new post object
    const newCarLog = new carLog(req.body);
    // Save the new post object
    newCarLog.save((err, savedCarLog) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(savedCarLog);
    });
});

logRouter.put("/:logId", (req, res, next) => {
    CarLog.findOneAndUpdate(
        {
            _id: req.params.logId,
            user: req.user._id
        },
        req.body,
        { new: true },
        (err, info) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(info);
        }
    );
});

logRouter.delete("/:logId", (req, res, next) => {
    CarLog.findOneAndRemove(
        {
            _id: req.params.logId,
            user: req.user._id
        },
        (err, info) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            if (info === null) {
                return res.send("nothing deleted");
            }
            return res.send({ info, successMsg: "Deleted" });
        }
    );
});

module.exports = logRouter;