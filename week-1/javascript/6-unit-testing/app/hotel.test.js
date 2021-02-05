


const getFood = require('./hotel')

test("should return biryani", (done) => {
    const promise = getFood();
    promise.then(food => {
        expect(food).toBe('biryani');
        done() // test success
    })
        .catch(err => {
            done(err) // test failed
        })
})