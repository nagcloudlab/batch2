
const http = require('http')
const fs = require('fs')


const httpServer = http.createServer() // EventEmitter

httpServer.on('request', (req, res) => {

    const httpMethod = req.method;
    const url = req.url;

    if (httpMethod === "GET" && url === "/NoSQL.pdf") {
        res.writeHead(200, {
            'Content-Type': "application/pdf",
            'Content-Disposition': 'attachment; filename=NoSQL.pdf'
        })
        // non blocking
        fs.readFile('../../week-5/PPT/NoSQL.pdf', (err, data) => {
            if (err) throw err;
            res.write(data)
            res.end()
        })
        return;
    }


    res.write('Invalid URL')
    res.end();;

})

httpServer.listen(8080, () => {
    console.log("server up & running ");
})