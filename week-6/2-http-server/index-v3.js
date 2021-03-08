
const http = require('http')
const fs = require('fs')


const httpServer = http.createServer() // EventEmitter

httpServer.on('request', (req, res) => {

    const httpMethod = req.method;
    const url = req.url;

    if (httpMethod === "GET" && url === "/bigfile") {
        res.writeHead(200, {
            'Content-Type': "application/octet-stream ",
            'Content-Disposition': 'attachment; filename=bigfile'
        })

        // non blocking IO without streams

        // fs.readFile('/Users/nag/Downloads/temp_5GB_file', (err, data) => {
        //     if (err) throw err;
        //     res.write(data)
        //     res.end()
        // })
        // return;


        // non blocking IO with streams without backpressure strategy
        const readStream = fs.createReadStream('/Users/nag/Downloads/temp_5GB_file');

        // readStream.on('data', (chunk) => {
        //     res.write(chunk)
        // })
        // readStream.on('end', () => {
        //     res.end()
        // })

        // non blocking IO with streams with backpressure strategy
        readStream.pipe(res)

        return;


    }


    res.write('Invalid URL')
    res.end();;

})

httpServer.listen(8080, () => {
    console.log("server up & running ");
})