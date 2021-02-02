
//----------------------------------------------------------------
// arrow - function  ( from ES6 )
//----------------------------------------------------------------


// const getPrice = function (count) {
//     return count * 100
// }

// or

// const getPrice = (count) => {
//     return count * 100
// }


// or

// const getPrice = count => {
//     return count * 100
// }

// or


// const getPrice = (count) => count * 100



// const getPrice = (count, tax) => count * 100 + tax


// const getPrice = (count, tax) => {
//     const cost = count * 100
//     const total = cost + tax
//     return total
// }


//----------------------------------------------------------------

// why/where we need arrow function ?

// #1 for compact higher-order-function


let numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// numbers.sort()

// numbers.sort(function (a, b) {
//     return a - b;
// })

// or

// numbers.sort((a, b) => {
//     return a - b;
// })

// or

numbers.sort((a, b) => a - b)
console.log(numbers);

//-------------------------------------------------------------