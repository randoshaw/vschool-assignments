const express = require('express')
const User = require('../models/user')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

//post a new user to user collection (signing up)
authRouter.post('/signup', (req, res, next) => {
    // try to find a user with the provided username. (if it already exists, we want to tell them that the username is already taken.)
    User.findOne({username: req.body.username}, (err, existingUser) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        // If the db doesnt return "null" it means there's already a user with that username. Send the error object to the global error handler on my server file
        if (existingUser !== null) {
            res.status(400)
            return next(newError("That username alreadys exists!"))
        }
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err) {
                res.status(500);
                return next(err);
            }

            // If the user sings up, give them a token so they don't have to log in as well
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(201.).send({success: true, user: user.toObject(), token})
        })
    })
})

authRouter.post("/login", (req, res, next) => {
    // Try to find the user with the submitted username (lowercased)
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) {
            return next(err)
        }
        // If that user isn't in the database or the password is wrong:
        if (!user || user.password !== req.body.password) {
            res.status(403)
            return next(new Error("Email or password are incorrect"))
        }
        // If usernmae and password both match an aentry in the database, 
        // create a JWT. Add the user object as the payload and pass in the the secret.
        // this secret is like a 'password' for JWT, so when its decoded it will pass the same secret used to create the JWT so that it knows you're allowed to decot it.
        const token = jwt.sign(user.toObject(), process.env.SECRET)

        // Send the token back to the client app.
        return res.send({token: token, user: user.toObject(), success: true})
    })
})

module.exports = authRouter