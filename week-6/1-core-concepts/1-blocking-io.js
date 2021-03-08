const fs = require('fs');

// 6s
const vegMenu = fs.readFileSync("./veg-menu.txt") // sync , blocking io / pull  ..... e.g 3s
console.log(vegMenu.toString());

//4s
const nonVegMenu = fs.readFileSync("./non-veg-menu.txt") // sync , blocking io / pull  ..... e.g 3s
console.log(nonVegMenu.toString());

// 10s
console.log("Do something else...");