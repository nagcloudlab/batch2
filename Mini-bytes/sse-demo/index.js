const app = require('express')();
const http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get("/live-feeds", (req, res) => {

    const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
    };
    res.writeHead(200, headers);


    let i = 0;
    setInterval(() => {
        i++;
        let message = "feed-" + i
        const event = `event: feed\n`
        const data = `data: ${message}\n\n`;
        res.write(event)
        res.write(data)
    }, 3000)

})

http.listen(3000, () => {
    console.log('listening on *:3000');
});