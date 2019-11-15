let express = require("express")
let myApp = express()

// Boilerplate code for Express. It enables the feature in express so that the user's input is easliy accessible from the req.body object.
myApp.use(express.urlencoded({extended: false}))

myApp.get('/', function (req, res) {
    res.send(`
    <form action="/answer" method="POST">
        <p>What color is the sky on a clear and sunny day?</p>
        <input name="skyColor" autocomplete="off">
        <button>Submit Answer</button>
    </form>
    `)
})

// toUpperCase makes it case insensitive (if typed 'Blue' 'BLUE' 'BlUe' etc., it will send it as the right answer.)
myApp.post('/answer', function(req, res) {
    if (req.body.skyColor.toUpperCase() == "BLUE") {
        res.send(`
        <p>Congrats, that is the correct answer!</p>
        <a href="/">Back to homepage</a>
        `)
    } else {
        res.send(`
        <p>Sorry, that is incorrect.</p>
        <a href="/">Back to homepage
        `)
    }
})

myApp.get('/answer', function(req, res) {
    res.send("Are you lost? There is nothing to see here.")
    })

myApp.listen(3000)