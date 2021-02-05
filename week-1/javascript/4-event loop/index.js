


// //#1

// function foo() { }
// function bar() { foo(); }
// function baz() { bar() }
// baz()

//----------------------------------------------------------------

// #2


// function foo() { throw new Error('oops') }
// function bar() { foo(); }
// function baz() { bar() }
// baz()

//----------------------------------------------------------------

///#3

// function foo() { foo(); }
// foo()

//----------------------------------------------------------------


// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         i++
//         console.log("long....");
//     }
// }

// function shortRunning() {
//     console.log("short..")
// }

// longRunning()
// shortRunning();

//----------------------------------------------------------------


// on Event


/*

    <button class="veg">Veg-1</button>
    <button class="veg">Veg-2</button>
    <button class="non-veg">Non-Veg</button>

*/

// console.log("intial script...");

// // using Jquery,
// $.on('.veg', 'click', function vegEventHandler(event) {
//     console.log("handling event on .veg elements");
// });
// $.on('.non-veg', 'click', function nonVegEventHandler(event) {
//     console.log("handling event on .non-veg elements");
// });

// console.log("cont.. with other work");

// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         i++
//         console.log("long....");
//     }
// }

// longRunning();

//----------------------------------------------------------------


// console.log("intial script...");

// setTimeout(function timeout() {
//     console.log("handling IO event")
// }, 2000)

// console.log("cont.. to do something else")
// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         i++
//         console.log("long....");
//     }
// }

// longRunning();


//----------------------------------------------------------------
// Quiz
//----------------------------------------------------------------

function teach() {
    const tnr = "Nag"; // move to heap 
    try {
        console.log(tnr + " teaching javascript");
        //throw new Error("javascript-error")
        setTimeout(function () {
            console.log(tnr + " teaching react.js")
            // try {
            //     throw new Error("react.js-error")
            // } catch (e) {
            //     console.log("i caught " + e.message);
            // }
            console.log("teaching react.js ends")
        }, 2000)

        console.log("teaching javascript ends");
    } catch (e) {
        console.log("i caught " + e.message);
    }
}

// teach();

//----------------------------------------------------------------