const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 7000;

app.use(express.json()); // req.body
app.use(morgan("dev"));

mongoose.connect(
    // "mongodb://localhost:27017/fuelgo",
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    () => console.log("Connected to the DB")
);

// Routes
app.use("/auth", require("./routes/authRouter.js")); // auth is just for logging in & signing up, presuming there is no token. if put below expressJwt, it will see there's no token and won't run.
app.use("/", expressJwt({ secret: process.env.SECRET })); // req.user - adds a user object to the request
app.use("/api/carInfo", require("./routes/carInfoRouter"));
app.use("/api/carLog", require("./routes/logRouter"));
app.use("/api/totals", require("./routes/totalsRouter"))
// Err handler
app.use((err, req, res, next) => {
    console.log(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status);
    }
    return res.send({ errMsg: err.message });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
//  req json headers params url
