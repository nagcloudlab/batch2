
// functional style ( intention & implementation are separated )

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function filter(inp, predicate) {
    let out = []
    for (let i = 0; i < inp.length; i++) {
        let n = inp[i]
        if (predicate(n))
            odds.push(n)
    }
    return out;
}

// Req1 : get all odd numbers into new Array
function getOdds() {
    // return filter(numbers, function (n) {
    //     return n % 2 !== 0
    // })
    // return filter(numbers, (n) => {
    //     return n % 2 !== 0
    // })
    // return filter(numbers, n => n % 2 !== 0)
    return numbers.filter(n => n % 2 !== 0)
}

// Req2 : get all even numbers into new Array
function getEvens() {
    return filter(numbers, function (n) {
        return n % 2 === 0
    })
}
// Req3 : get all even numbers > 5 into new Array
function getEvensAboveFive() {
    return filter(numbers, function (n) {
        return n > 5n % 2 === 0
    })
}

