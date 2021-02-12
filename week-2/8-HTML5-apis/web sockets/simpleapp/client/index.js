

//-------------------------------
let socket = new WebSocket("ws://localhost:8080");

socket.onopen = function (e) {
    console.log("[open] Connection established");
    // socket.send("My name is Nag"); // Message
};
socket.onmessage = function (event) {
    console.log(`[message] Data received from server: ${event.data}`);
};

let i = 0;
setInterval(() => {
    i++;
    socket.send(i)
}, 2000)

//----------------------------------------------------------------