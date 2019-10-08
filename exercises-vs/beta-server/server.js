const express = require('express')
// console.log(express)
const app = express()
// console.log(app)

// fake database





// Server Route to handle a Get request to a specific endpoint
app.get("/unicorn", (req, res) => {
    // code to get all the unicorns from the magical forest
    res.send("unicorns")
})




        // PORT NUMBER (don't use 3000, 3010. use 7000)  // CALLBACK
app.listen(7000, () => {
    console.log("Server is running on port 7000")
})


// Terminal Commands
    // nodemon server.js => start server
    // pkill node => kill all servers running
    
//test test