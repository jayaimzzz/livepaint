const express = require("express")
const port = 3000
const app = express()
const updates = [];

app.use(express.static('public'))
app.use(express.json())

// Fill in your request handlers here

app.post("/updates", function (req, res){
    if(req.body.clientUpdates.length > 0) {updates.push(req.body.clientUpdates)}
    // console.log(req.body.lengthOfLastServerUpdate)
    newUpdates = updates.slice(req.body.lengthOfLastServerUpdate)
    res.send({
        "serverUpdates": newUpdates
    });
})

app.listen(port)