const express = require('express')
const redis = require('redis')
const os = require('os')

const app = express()
const client = redis.createClient({ host: 'redis-svc' }) // redis-client

//Set initial visits
client.set('visits', 0);

//defining the root endpoint
app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        visits = parseInt(visits)
        visits += 1
        res.send('Number of visits is: ' + visits + " from pod " + os.hostname())
        client.set('visits', visits)
    })
})

//specifying the listening port
app.listen(3000, () => {
    console.log('Listening on port 3000')
})