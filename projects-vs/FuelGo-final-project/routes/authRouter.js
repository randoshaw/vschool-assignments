const express = require("express");
const authRouter = express.Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

// SIGNUP
authRouter.post("/signup", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        // Does a user by the given username already exist?
        if (user !== null) {
            res.status(400);
            return next(new Error("That username is already taken?!"));
        }

        const newUser = new User(req.body);
        // save user in database
        newUser.save((err, savedUser) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            // generate a token
            const token = jwt.sign(
                savedUser.withoutPassword(),
                process.env.SECRET
            );
            // send the response that includes the user's information & a token
            return res
                .status(201)
                .send({ user: savedUser.withoutPassword(), token });
        });
    });
});

// LOGIN
authRouter.post("/login", (req, res, next) => {
    // Does the user already exist?
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        // Does the user already exist?
        if (!user) {
            res.status(401);
            return next(
                new Error("Sorry, the Username or Password is not correct")
            );
        }
        // Does the user's password match the saved password
        user.checkPassword(req.body.password, (err, isMatch) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            if (!isMatch) {
                res.status(401);
                return next(
                    new Error("Sorry, the Username or Password is not correct")
                );
            }
            // creating the token
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            // and sending response with user and token
            return res
                .status(200)
                .send({ user: user.withoutPassword(), token });
        });
    });
});

module.exports = authRouter;
