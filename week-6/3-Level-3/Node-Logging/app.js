const express = require('express');
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

var log4js = require("log4js");


const app = express()

var logger = log4js.getLogger();
logger.level = "debug";


// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'http-traffic.log'), { flags: 'a' })
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))


app.get("/", (req, res) => {
    res.json({ message: 'welcome' })
})

app.get("/req", (req, res) => {

    logger.info("INFO")
    logger.warn('WARN')
    logger.error("ERROR")
    logger.fatal('FATAL')

})

app.listen(3000, () => {
    console.log("server up")
})
