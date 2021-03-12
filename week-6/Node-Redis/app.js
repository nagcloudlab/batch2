const express = require('express');
const app = express()
const bodyParser = require('body-parser')

const Redis = require("ioredis");
const redis = new Redis();


app.get("/", (req, res) => {
    res.json({ message: "welcome" })
})

// const cart = [] // in-memory , part of server process

app.post('/cart', bodyParser.json(), async (req, res) => {
    const body = req.body;
    const { item } = body

    await redis.lpush('cart1', item)

    res.json({ message: "Itemm added into cart" })
})

app.get('/cart', bodyParser.json(), async (req, res) => {
    const cart = await redis.lrange('cart1', 0, -1)
    res.json({ cart })
})


app.listen(3000, () => {
    console.log("server up")
})
