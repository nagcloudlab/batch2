const fs = require('fs');

// non-blocking / async / push   e.g 3s

const callback = (err, data) => {
    if (err) throw err;
    console.log(data.toString());
}

fs.readFile("./veg-menu.txt", callback)
fs.readFile("./non-veg-menu.txt", callback)


console.log("Do something else...");
