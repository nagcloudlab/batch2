

//...
console.log("long running started")
for (let i = 0; i < 10000000; i++) {
    if (i % 1000 === 0) {
        postMessage(i)
    }
}
console.log("long running finished")