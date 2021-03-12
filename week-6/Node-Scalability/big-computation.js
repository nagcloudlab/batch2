
// simulate route processing delay
for (let i = 0; i < 2e6; i++) { } // blocking
console.log(`Server ${process.pid} says hi`)