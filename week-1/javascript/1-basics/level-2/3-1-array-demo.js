

const products = [
    { id: 1, name: 'item-1', price: 100.00 },
    { id: 2, name: 'item-2', price: 300.00 },
    { id: 3, name: 'item-3', price: 200.00 }
]


//----------------------------------------------------------------

// mutable
// products.push({ id: 4, name: 'item-4', price: 400.00 })
// products.unshift({ id: 4, name: 'item-4', price: 400.00 })

// immutable
// const newProducts = products.concat({ id: 4, name: 'item-4', price: 400.00 })

//----------------------------------------------------------------

// const result = products.slice(0, 1)

//----------------------------------------------------------------

// const result = products.splice(0, 1)
// products.splice(0, 1, { id: 4, name: 'item-4', price: 400.00 })

//----------------------------------------------------------------

// const result = products.every(function (item) {
//     return item.price > 100
// })
// - or-
// const result = products.every(item => item.price > 100)
// console.log(result)

//----------------------------------------------------------------

// const result = products.some(function (item) {
//     return item.price > 100
// })
// console.log(result)

//----------------------------------------------------------------

// const idx = products.findIndex(function (item) {
//     return item.price === 800
// })
// console.log(idx);

//----------------------------------------------------------------

// const item = products.find(function (item) {
//     return item.id === 2
// })
// console.log(item);

//----------------------------------------------------------------

// const result = products.filter(function (item) {
//     return item.price >= 200
// })
// console.log(result);

//----------------------------------------------------------------

// tranform 
// const result = products.map(function (item) {
//     return item.name;
// })
// console.log(result)

//----------------------------------------------------------------

// imperative style

// let total = 0;
// for (let i = 0; i < products.length; i++) {
//     total += products[i].price;
// }

// console.log(total)


// functional style

// const total = products.reduce(function (acc, next) {
//     return acc + next.price
// }, 0)
// console.log(total);

//----------------------------------------------------------------

// products.forEach(function (item, idx) {
//     console.log(idx, item);
// })

//----------------------------------------------------------------

// products.sort(function (a, b) {
//     return b.price - a.price
// })

// products.forEach(function (item, idx) {
//     console.log(idx, item);
// })

//----------------------------------------------------------------

// products.pop()
// console.log(products);

//----------------------------------------------------------------

// products.reverse()

//----------------------------------------------------------------