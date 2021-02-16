
const express = require('express')
const axios = require('axios')
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/geo", (req, res) => {
    let { latitude, longitude } = req.query;
    let key = '6957aa28b1064bd5729b141e94b7f88a'
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
    axios.get(url)
        .then(response => response.data)
        .then(weather => {
            res.json(weather)
        })
})

app.listen(8080);