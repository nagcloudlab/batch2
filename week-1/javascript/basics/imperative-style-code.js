
// imperative style ( intention + implementation mixed together )

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Req1 : get all odd numbers into new Array
function getOdds() {
    let odds = []
    for (let i = 0; i < numbers.length; i++) {
        let n = numbers[i]
        if (n % 2 !== 0)
            odds.push(n)
    }
    return odds
}

// Req2 : get all even numbers into new Array
function getEvens() {
    let evens = []
    for (let i = 0; i < numbers.length; i++) {
        let n = numbers[i]
        if (n % 2 === 0)
            evens.push(n)
    }
    return evens
}

// Req3 : get all even numbers > 5 into new Array
function getEvensAboveFive() {
    let evens = []
    for (let i = 0; i < numbers.length; i++) {
        let n = numbers[i]
        if (n > 5 && n % 2 === 0)
            evens.push(n)
    }
    return evens
}

