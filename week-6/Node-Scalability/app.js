const express = require('express')

const pid = process.pid;

const app = express()
app.get("/", (req, res) => {
    console.log(`${pid} handling request`)
    // simulate route processing delay
    for (let i = 0; i < 2e6; i++) { } // blocking
    res.send(`Server ${pid} says hi`)
})

app.get("/kill", (req, res) => {
    process.exit(0)
})
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server: process ${pid} is listening on ${port}`)
})
