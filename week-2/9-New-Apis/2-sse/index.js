

const express = require('express');
const app = express();;

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/live-scores", (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/event-stream' })
    const interval = setInterval(() => {
        const score = Math.floor(Math.random() * 40)
        res.write(`event:hit\n`)
        res.write(`data:${score}\n\n`)
    }, 2000)
    // setTimeout(() => {
    //     clearInterval(interval)
    //     res.end();
    // }, 5000)
})



app.listen(8080, () => {
    console.log("server listening at http://localhost:8080");
})