const express = require("express");
const app = express();
require('dotenv').config()
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(bodyParser.json());

//connect to db
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost:27017/todo-auth-example",
    { useNewUrlParser: true },
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

// Make the app use the express-jwt authentication middleware on anything starting with '/api'
app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use("/auth", require("./routes/auth"))
// Add `/api` before your existing `app.use` of the todo routes.
// This way, it must go through the express-jwt middleware before
// accessing any todos, making sure we can reference the "currently
// logged-in user" in our todo routes.
app.use("/api/todo", require("./routes/todo"));
// app.use("/todo", require("./routes/todo"));

app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        // express-jwt gives the 401 status to the err object for us
        res.status(err.status)
    }
    return res.send({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});
