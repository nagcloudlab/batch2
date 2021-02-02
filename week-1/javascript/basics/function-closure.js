


//----------------------------------------------------
// Function Closure
//----------------------------------------------------

/**
 * 
 * A closure is a function having access to the parent scope, 
 * even after the parent function has closed.
 * 
 * 
 */


function teach(sub) {
    console.log(`teaching ${sub}`);
    const notes = `${sub}-notes`
    const fun = "bla bla bla";
    function learn() {
        console.log("learning with " + notes);
    }
    // learn();
    console.log("teaching ends");
    return learn;
}

// const learnFunc = teach("javascript")
// learnFunc();

//----------------------------------------------------------------

//----------------------------------------------------
//  when / where we need closure ?
//----------------------------------------------------


// #1 : to abstract public behav of javascript module


/**
 *   e.g counter module
 *
 *    - increment
 *    - get
 *
 */

// imp-note : Never keep appln data on global-scope, becoz anyone can read/write 

// closure
// function init() {
//     let count = 0; // private data
//     function increment() {
//         count++
//     }
//     function get() {
//         return count
//     }
//     return {
//         increment: increment,
//         get: get
//     }
// }

// const counter1 = init()
// const counter2 = init()
// const counter3 = init()
//....

//----------------------------------------------------------------
// design pattern : self executable function -or- IIFE ( immediatly Invoc... Func... Expr... )
//----------------------------------------------------------------

const counter = (function () {
    let count = 0; // private data
    function increment() {
        count++
    }
    function get() {
        return count
    }
    return {
        increment: increment,
        get: get
    }
})()


// why we need ?

/**
 *
 *  ==> to intilize any module one time and abstract some behav
 *
 */

 //----------------------------------------------------------------
