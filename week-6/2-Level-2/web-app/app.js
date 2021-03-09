
const express = require('express')
const path = require('path')

const logger = require('./middlewares/logger')
const morgan = require('morgan')
const favicon = require('serve-favicon')

const todos = require('./routes/todos')

const app = express();

app.set('view engine', 'hbs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
// app.use(logger)
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.static(path.join(__dirname, 'public')))
app.use((req, res, next) => {
    console.log("Auth...")
    next()
})

app.use("/todos", todos)


app.listen(3000, () => {
    console.log("listening on port 3000");
})

