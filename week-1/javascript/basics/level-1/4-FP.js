
// what is function ?  https://www.mathsisfun.com/sets/function.html

/*

// how to define/create function ?

    2 ways

    1. function declarations
    2. function expression

*/

// imp Note : every function is an object


//----------------------------------------------------------------

// 1. function declarations / Named function

// => function will get create at scope creation-phase
// => always hoist with function-obj


// let result = add(12, 13)
// console.log(result);

// function add(n1, n2) {
//     return n1 + n2;
// }

// let result = add(12, 13)
// console.log(result);

//----------------------------------------------------------------

// 2. function expression / Anonymous function

//  => function will get create at scope execution-phase

// let result = add(12, 13) // Error
// console.log(result);

// let add = function (n1, n2) {
//     return n1 + n2;
// }

// let result = add(12, 13)
// console.log(result);




//----------------------------------------------------------------
// function parameters
//----------------------------------------------------------------

// imp-note : function can take zero or more params,not restricted by argument names


// function f1(a, b, c) {
//     console.log(a, b,c);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
// }
// f1(12, 13, 14)


// e.g : write function , return sum of 'n' params

function sum() {
    let result = 0, len = arguments.length, i = 0;
    while (i < len) {
        result += arguments[i]
        i++
    }
    return result
}


//----------------------------------------------------------------

// QUIZ

// imp-note : we can't overload function by params

// function getFood() {
//     return "NO FOOD"
// }

function getFood(pay) {
    if (arguments.length === 0) return "NO FOOD"
    return "FOOD"
}

// console.log(getFood(100));


//----------------------------------------------------------------
// function with default params  ( ES6 )
//----------------------------------------------------------------


function f(a = 1, b = 2) {

    // if (!a)
    //     a = 1
    // if (!b)
    //     b = 2

    // or

    // a = a || 1
    // b = b || 2

    console.log(a);
    console.log(b);
}

// f(undefined, 20);


//----------------------------------------------------------------
// function with rest param ( ES6 )
//----------------------------------------------------------------

function ff(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
    console.log(Array.isArray(rest))
}

ff(12, 13, 14, 15, 16, 17)

//----------------------------------------------------------------