const express = require("express");
const bountyRouter = express.Router();
const Bounty = require("../models/bounty")

// Get All
bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    }) 
})

// Makes one
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body) // req.body is the info the user puts in
    newBounty.save((err, newBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }

        return res.status(200).send(newBounty)
    }) 
})

// Get one
bountyRouter.get("/:_id", (req, res, next) => {
    Bounty.findById(req.params._id, (err, bounty) => {
        if (err) {
            res.status(500)
            return next (err)
        }

        return res.status(200).send(bounty)
    })
})

// Delete
bountyRouter.delete("/:_id", (req, res, next) => {
    Bounty.findByIdAndRemove(req.params._id, (err, bounty) => {
        if (err) {
            res.status(500)
            return next (err)
        }

        return res.status(200).send(bounty)
    })
})

bountyRouter.put("/:_id", (req, res, next) => {
    Bounty.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true },
        (err, bounty) => {
            if (err) {
                res.status(500)
                return next (err)
            }
            return res.status(200).send(bounty)
        }
    )
})



//////////////////////

// // GET (R) is the http request method that the client sends to the server.
// bountyRouter.route("/")
//     .get((req, res) => {
//         res.send(bounty);
//     }) // Post (C) creates a new entry in the database and adds it to the object/array.
//     .post((req, res) => {
//         const newBounty = req.body; // body doesn't exist until middlware on express.json creates it
//         // console.log(newBounty)
//         newBounty._id = uuid(); // Adding a key/value pair. Key = _id , value = what's returned from the uuid call.
//         bounty.push(newBounty); // Adds it to the bounty array
//         res.send(newBounty); // Calling the send method on the object & passing in the new bounty object with new id then sends it back to the client
//     });

// // function route(_id){

// // }
// // route('goodbye')

// function finder(bountyId) {
//     return bounty.find(aBounty => {
//         return aBounty._id === bountyId;
//     });
// } // find() method returns the value of the first element in the provided array that satisfies the provided testing function.

// function indexFinder(bountyId) {
//     return bounty.findIndex(bBounty => bBounty._id === bountyId);
// } // findIndex() method returns the index of the first element in the array that satisfies the provided testing function.

// bountyRouter
//     .route("/:_id")
//     .get((req, res) => {
//         const bountyId = req.params._id;
//         const specificBounty = finder(bountyId);
//         res.send(specificBounty);
//     })
//     .delete((req, res) => {
//         const bountyId = req.params._id;
//         const indexToDel = indexFinder(bountyId);
//         bounty.splice(indexToDel, 1); // The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 1 is how many elements we want to delete
//         res.send({ message: "Successfully Deleted Bounty" });
//     })
//     .put((req, res) => {
//         const bountyId = req.params._id;
//         console.log("put id", req.params._id);
//         const bountyUpdate = bounty.find(
//             person => person._id === req.params._id
//         );
//         console.log("bountyUpdate", bountyUpdate);
//         const indexToUpdate = indexFinder(bountyId)
//         const updatedBounty = Object.assign(bountyUpdate, req.body); // Object.assign merges the requests body key, value pairs into the bounty update object. It will add any new keys that have not been stated.
//         bounty.splice(indexToUpdate, 1, updatedBounty); // Removes the matching _id and replaces it with the updated object.
//         res.send(updatedBounty);
//     });



// The way to EXPORT in node
module.exports = bountyRouter;
