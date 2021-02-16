
// http-server
const http = require('http')
const WebSocket = require('ws');
const httpServer = http.createServer();

// websocket server with httpServer
const wss = new WebSocket.Server({ server: httpServer });

httpServer.on('request', (req, res) => {
    res.write("hello from http-server")
    res.end();
})

wss.on('connection', ws => {
    ws.on('message', message => {
        ws.send(" hello " + message)
    })
    let i = 0;
    setInterval(() => {
        i++;
        ws.send("hello " + i)
    }, 2000)
});


httpServer.listen(8080)