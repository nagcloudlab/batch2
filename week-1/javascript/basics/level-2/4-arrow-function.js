"use strict";

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
//----------------------------------------------------------------

// #1 for compact higher-order-function arguments


// let numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// numbers.sort()

// numbers.sort(function (a, b) {
//     return a - b;
// })

// or

// numbers.sort((a, b) => {
//     return a - b;
// })

// or

// numbers.sort((a, b) => a - b)
// console.log(numbers);

//-------------------------------------------------------------

// #2 


// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(`${this.name} teaching javascript`); // Nag teaching javascript
//         const askQues = (q) => {
//             console.log(`${this.name} answering ${q}`); // 
//         }
//         return askQues
//     }
// }

// const askQues = tnr.doTeach()
// askQues("Q1")
// askQues("Q2")

//----------------------------------------------------------------

// const person1 = {
//     name: 'P1',
//     createReguarFunction: function () {
//         return function () {
//             console.log(this)
//         }
//     },
//     createArrowFunction: function () {
//         return () => {
//             console.log(this)
//         }
//     }
// }

// const regularFunc = person1.createReguarFunction()
// regularFunc();

// const arrowFunc = person1.createArrowFunction()
// arrowFunc()

// const person2 = { name: 'P2' }

// person2.regularFunc = regularFunc
// person2.regularFunc();

// person2.arrowFunc = arrowFunc;
// person2.arrowFunc()

//----------------------------------------------------------------


// console.log(this)
// const regularFunc = function () {
//     console.log(this)
// }
// regularFunc()

// const arrowFunc = () => {
//     console.log(this);
// }

// arrowFunc();
// let o1 = { name: 'Nag' }
// regularFunc.call(o1)
// arrowFunc.call(o1) // this will not bind with o1

//----------------------------------------------------------------

// Quiz

// let invoice = {
//     number: 123,
//     process: function () {
//         console.log(this.number)
//     }
// }


// imp-note: global scope owned by global-object ( e.g window )

// let invoice = {
//     number: 123,
//     process: () => {
//         console.log(this.number)
//     }
// }


// let invoice = {
//     number: 123,
//     process: function () {
//         console.log(this.number + " processed partially..")
//         return function () {
//             console.log(this.number + " processed completly..")
//         }
//     }
// }



//----------------------------------------------------------------
//imp-note : arrow function always belongs to parent-scope's owner
//----------------------------------------------------------------



// Final Quiz

// function getArrow() {
//     console.log(this) // undefined
//     return () => {
//         console.log(this) // undefined
//     }
// }


// const arrow = getArrow();
// arrow();

//----------------------------------------------------------------


// function f() {
//     // console.log(this) // {name:'foo'}
//     const regFunc = function () {
//         console.log(this)
//     }
//     const arrFunc = () => {
//         console.log(this)
//     }
//     // regFunc();
//     // arrFunc();
//     let p = { name: 'bar' }
//     regFunc.call(p)
//     arrFunc.call(p)
// }

// let p = { name: 'foo' }

// f.call(p)

//----------------------------------------------------------------

