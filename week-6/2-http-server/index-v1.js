
const http = require('http')
const httpServer = http.createServer() // EventEmitter

httpServer.on('request', (req, res) => {

    const httpMethod = req.method;
    const url = req.url;

    if (httpMethod === "GET" && url === "/hello") {
        const helloMessage = "hello cognizant!"
        res.writeHead(200, {
            'Content-Type': "text/plain"
        })
        res.write(helloMessage)
        res.end();
        return;
    }


    res.write('Invalid URL')
    res.end();;

})

httpServer.listen(8080, () => {
    console.log("server up & running ");
})